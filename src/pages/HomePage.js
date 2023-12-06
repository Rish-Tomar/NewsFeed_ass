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
        {login?
                <>
                <Login/>
                <Typography textAlign="center">
                    Not a Member ? <Button onClick={()=>setLogin(false)}>SignUp</Button></Typography>
                </>
            :
                <>
                <SignUp/>
                <Typography textAlign="center">
                    already a Member ? <Button onClick={()=>setLogin(true)}>Login</Button></Typography>
                </>
            }
    </div>
  )
}

export default HomePage