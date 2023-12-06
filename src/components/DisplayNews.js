import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectNews } from '../features/newsApiAuthentication/newsSlice'
import { Box, Typography } from '@mui/material'

function DisplayNews() {
    const news = useSelector(selectNews)
    useEffect(()=>{

    },[news])
    console.log("news",news.news)
  return (
    <Box display={'flex'} flexGrow={'2'}>
        {
           news && news.news.articles.map( ele => (
                <Box>
                    <Typography>{ele.title}</Typography>
                </Box>
            ))
        }

    </Box>
  )
}

export default DisplayNews