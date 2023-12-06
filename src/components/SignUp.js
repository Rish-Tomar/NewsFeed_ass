import React, { useState } from 'react'
import {Box,Button,InputBase,TextField,Typography,styled} from '@mui/material'
import {auth,
    createUserWithEmailAndPassword,
    updateProfile,
} from '../firebase/firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'


const FlexBetweenBox =styled(Box)({
    display:'flex',
    flexDirection:"column",
    alignItems:"center",
    margin:"auto",
    marginTop:'3rem',
    gap:"1rem"
})

function SignUp() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const dispatch = useDispatch()

    const handleNameChange =(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleEmailChange =(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    const handlePasswordChange =(e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const signUpHandler =(e)=>{
        console.log(email,password)
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then((userAuth)=>{
            updateProfile(userAuth.user)
            .then(
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid
                }))
            ).catch((err)=>{
                console.log("User not Updated",err)
            })
        }).catch((err)=>{
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log("error Code",errorCode)
            console.log("error message", errorMessage)
        })
    }
   
   
  return (
    <FlexBetweenBox>
        <Typography>SIGNUP</Typography>
         <TextField
          label="Name"
          onChange={(e)=>handleNameChange(e)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e)=>handleEmailChange(e)}
        />
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>handlePasswordChange(e)}
        />
        <Button  variant="contained" onClick={signUpHandler}>SIGN-UP</Button>
    </FlexBetweenBox>
  )
}

export default SignUp