import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {RouterProvider, createBrowserRouter}  from 'react-router-dom'
import HomePage from './pages/HomePage';
import NewsFeed from './pages/NewsFeed';

// Routes for the application
const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"newsfeed",
    element:<NewsFeed/>
  }
])

// Entry Point Of application
function App() {
  return (
    <div>
     {<RouterProvider router={router}/>}
    </div>
  );
}

export default App;
