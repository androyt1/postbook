import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { IUser } from '../interfaces/user'
import { useParams } from 'react-router-dom'

const User = () => {

  const id=useParams().id

  const[user,setUser]=useState<IUser>()

  useEffect(()=>{ 
      (
        async()=>{
          let user=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
          setUser(user.data)
        }
      )()
  },[id])

  return (
    <div className='px-3 font-roboto min-h-[calc(100vh-60px)]'>
       <header className='w-full py-10 flex flex-col justify-center items-center bg-blue-900 text-blue-50'>
            <h3 className='uppercase font-semibold text-2xl text-center'>User Details</h3>           
        </header>

        <div className='px-3 py-5'>
           <div>
           <label htmlFor="name">Name</label> : <span>{user?.name}</span> 
           </div>
           <div>
           <label htmlFor="name">Username</label> : <span>{user?.username}</span> 
           </div>
           <div>
           <label htmlFor="name">Email Address</label> : <span>{user?.email}</span> 
           </div>
           <div>
           <label htmlFor="name">Phone</label> : <span>{user?.phone}</span> 
           </div>
           <div>
           <label htmlFor="name">Street</label> : <span>{user?.address.suite}</span> 
           </div>
           <div>
           <label htmlFor="name">Suite</label> : <span>{user?.address.suite}</span> 
           </div>
           <div>
           <label htmlFor="name">City</label> : <span>{user?.address.city}</span> 
           </div>
           <div>
           <label htmlFor="name">Zip Code</label> : <span>{user?.address.zipcode}</span> 
           </div>
           <div>
           <label htmlFor="name">City</label> : <span>{user?.address.city}</span> 
           </div>
           <div>
           <label htmlFor="name">Company Name</label> : <span>{user?.company.name}</span> 
           </div>
           <div>
           <label htmlFor="name">Catch Phrase</label> : <span>{user?.company.catchPhrase}</span> 
           </div>
           <div>
           <label htmlFor="name">BS</label> : <span>{user?.company.bs}</span> 
           </div>
        </div>
    </div>
  )
}

export default User