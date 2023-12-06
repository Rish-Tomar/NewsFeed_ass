import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import { fetchNewsAsync } from '../features/newsApiAuthentication/newsSlice'
import DisplayNews from '../components/DisplayNews'

function NewsFeed() {
    const user =useSelector(selectUser)
    const [loading,setloading]=useState(true)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchNewsAsync())
        setloading(false)
    }, [dispatch])
    
  return (
    <>
        {/* {user&& */}
        <NavBar/>
        {!loading&&<DisplayNews/>}
        {/* } */}
    </>
  )
}

export default NewsFeed