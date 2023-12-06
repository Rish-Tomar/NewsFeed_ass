import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectNews } from '../features/newsApiAuthentication/newsSlice'
import { Box, Paper, Typography } from '@mui/material'

function DisplayNews() {
    const news = useSelector(selectNews)
    
    useEffect(()=>{
    },[news])
    console.log("news",news.news)
  return (
    <Box display={'flex'} flexWrap={"wrap"}>
        {
            news.news.articles.map( ele => (
                <Paper elevation={3} height={"80%"} width="40%" sx={{backgroundColor:"#f5f1f13b",margin:"10px",p:"7px"}}>
                    <Typography>{ele.title}</Typography>
                    <img
                        height={"80vh"}
                        src={ele.urlToImage}
                        alt="news image"
                    />
                    <Box>
                        <Typography>{ele.author&&'AUTHOR'}</Typography>
                        <Typography>{ele.author&&ele.author}</Typography>
                    </Box>
                    <Typography>LINK : <a href={ele.url} target="_blank">{ele.url}</a></Typography>
                </Paper>
            ))
        }

    </Box>
  )
}

export default DisplayNews