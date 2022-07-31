import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-[60px] flex justify-between items-center px-3'>
        <h5 className='text-2xl font-roboto'>Branded</h5>
        <nav>
            <ul>
                <li className='inline-block text-xs font-roboto ml-3'><NavLink to='/'>Home</NavLink></li>
                <li className='inline-block text-xs font-roboto ml-3'><NavLink to='/users'>Users</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar