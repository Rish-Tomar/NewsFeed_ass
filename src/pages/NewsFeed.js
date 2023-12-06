import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import { fetchNewsAsync } from '../features/newsApiAuthentication/newsSlice'

function NewsFeed() {
    const user =useSelector(selectUser)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchNewsAsync())
    }, [dispatch])
    
  return (
    <>
        {user&&
        <NavBar/>
        }
    </>
  )
}

export default NewsFeed