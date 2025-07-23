import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import PostPage from './pages/PostPage';
import CommentPage from './pages/CommentPage';
import {Toaster} from "react-hot-toast";
import UserProfile from './pages/UserProfile';


const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/home' element={<AdminHome/>}/>
        <Route path='/postpage' element={<PostPage/>}/>
        <Route path='/commentpage' element={<CommentPage/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
      </Routes>
    </div>
  )
}

export default App
