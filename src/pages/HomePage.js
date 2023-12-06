import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import { Button, Typography, styled } from '@mui/material'
import SignUp from '../components/SignUp'


function HomePage() {
    const [login,setLogin]=useState(true)
  return (
    
    <div>
        <NavBar/>
        {/* if login is true then Login Component will be rendered else Signup will be rendered */}
        {login?
                <>
                <Login/> {/* Login component */}
                <Typography textAlign="center">
                    Not a Member ? <Button onClick={()=>setLogin(false)}>SignUp</Button></Typography>
                </>
            :
                <>
                <SignUp/> {/* Signup component */}
                <Typography textAlign="center">
                    already a Member ? <Button onClick={()=>setLogin(true)}>Login</Button></Typography>
                </>
        }
    </div>
  )
}

export default HomePage