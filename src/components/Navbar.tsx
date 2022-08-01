import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const[scroll,setScroll]=useState<boolean>(false)

  const handleScroll=()=>window.scrollY >= 60 ? setScroll(true):setScroll(false)
  
  window.addEventListener('scroll',handleScroll)

  return (
    <header className={`w-full h-[60px] flex justify-between items-center px-3 sticky top-0 z-[50] transition-colors duration-500 ease-in-out ${scroll ? 'bg-blue-900 text-blue-50':'bg-white text-blue-900' } `}>
        <h5 className='text-xl font-roboto'>PostApp</h5>
        <nav>
            <ul>
                <li className='inline-block  font-roboto ml-3'><NavLink to='/'  className={({ isActive }) =>
              isActive ? 'font-bold text-sm' : 'text-xs'
            }>Home</NavLink></li>
                <li className='inline-block font-roboto ml-3'><NavLink to='/users'  className={({ isActive }) =>
              isActive ? 'font-bold text-sm' : 'text-xs'
            }>Users</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar