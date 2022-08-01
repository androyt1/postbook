import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Post from './pages/Post'
import User from './pages/User'
import Users from './pages/Users'
import UserPost from './pages/UserPost'

const App = () => {
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/posts/:id' element={<Post/>} />  
        <Route path='/user/:id' element={<User/>}/>   
        <Route path='/users' element={<Users/>}/>
        <Route path='/user-posts/:id' element={<UserPost/>}/>
      </Routes>
    </div>
  )
}

export default App