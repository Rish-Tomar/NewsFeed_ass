import React, { useState } from 'react'
import {Box,Button,InputBase,TextField,Typography,styled} from '@mui/material'
import {auth,signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from '../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'


const FlexBetweenBox =styled(Box)({
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    margin:"auto",
    marginTop:'3rem',
    gap:"1rem"
})

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch = useDispatch()
    const user =useSelector(selectUser)
    const navigate=useNavigate()

    const handlePasswordChange =(e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const loginHandler =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid
            }))
            navigate("/newsfeed")
        })
        .catch( (err)=>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log("error Code",errorCode)
            console.log("error message", errorMessage)
        })
    }

   
  return (
    <FlexBetweenBox>
            <Typography>LOGIN</Typography>
            <TextField
            required
            id="outlined-required"
            label="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e)=>handlePasswordChange(e)}
            />
            <Button  variant="contained" onClick={loginHandler}>LOG-IN</Button>
    </FlexBetweenBox>
  )
}

export default Login