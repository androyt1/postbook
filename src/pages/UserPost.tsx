import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { IUser } from '../interfaces/user'
import { IPost } from '../interfaces/post'
import axios from 'axios'
import {GoPrimitiveDot} from 'react-icons/go'
import {Link} from 'react-router-dom'

const UserPost = () => {
    let id=useParams().id 
   
 
    const[posts,setPosts]=useState<IPost[]>([])
    const[user,setUser]=useState<IUser>()

    useEffect(()=>{ 
        ( 
            async ()=>{
                let allPost=await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(allPost.data.filter((post:IPost)=>post.userId===Number(id)))
            }
        )()
    },[id])

    useEffect(()=>{
        (
            async ()=>{
                let users=await axios.get('https://jsonplaceholder.typicode.com/users')
                setUser(users.data.find((user:IUser)=>user.id===Number(id)))
            }
        )() 
    },[id])

    

  return (
    <div className='px-3 font-roboto min-h-[calc(100vh-60px)]'>
         <header className='w-full py-10 flex flex-col justify-center items-center bg-blue-900 text-blue-50 mb-8'>
            <h3 className='uppercase font-semibold text-2xl text-center'>User's Posts</h3> 
            <h6 className='uppercase font-normal text-md text-center mt-2'>User {user?.name}</h6>            
        </header>


        {
            posts?.map(post=>(
            <div key={post.id} className='px-3 mb-4 odd:bg-white even:bg-slate-100 py-4'>
               <Link to={`/posts/${post.id}`}>
               <div className='flex justify-start items-center'><GoPrimitiveDot className='mr-3'/> <p className='uppercase'>{post.title}</p></div>
                <div className='pl-12'><p className='first-letter:text-xl first-letter:font-semibold first-letter:uppercase text-xs'>{post.body}</p></div>
               </Link>
            </div>
            ))
        }
    </div>
  )
}

export default UserPost