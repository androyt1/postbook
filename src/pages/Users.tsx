import React,{useState,useEffect} from 'react'
import { IUser } from '../interfaces/user'
import axios from 'axios'
const Users = () => {

    const[users,setUsers]=useState<IUser[]>([])

    useEffect(()=>{
        (
            async()=>{
                const users=await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(users.data)
            }
        )()
    },[])

  return (
    <div className='px-3 font-roboto min-h-[calc(100vh-60px)]'>
         <header className='w-full py-10 flex flex-col justify-center items-center bg-blue-900 text-blue-50 mb-4'>
            <h3 className='uppercase font-semibold text-2xl text-center'>Users</h3>           
        </header>


        <div>
            {
                users?.map(user=>(
                <div key={user.id} className='odd:bg-white even:bg-slate-100 px-3 py-5 my-5'>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Users