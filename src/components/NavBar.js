import { Box, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBarWrapper =styled(Paper)({
   backgroundColor:'#d8dddd',
   height:'3rem',
   display:'flex',
   justifyContent:'space-between'
})

function NavBar() {
    const navigate=useNavigate()
  
    return (
   <NavBarWrapper elevation={3}>
    <Typography p={'1rem'} fontWeight={"800"} color={"#0098e3e0"}>DAILY NEWS</Typography>
    <Box display={"flex"} p={"1rem"} gap={"1rem"} paddingRight={"5%"}>
        <Typography 
            onClick={()=>navigate("/")} sx={{cursor:'pointer'}}>Home</Typography>
        <Typography
            onClick={()=>navigate('/news')} sx={{cursor:'pointer'}}>See-News</Typography>
    </Box>
   </NavBarWrapper>
  )
}

export default NavBar