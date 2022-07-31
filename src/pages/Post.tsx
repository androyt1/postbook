import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IPost } from '../interfaces/post'
import { IComment } from '../interfaces/comment'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'

const Post = () => { 

    const id=useParams().id
     const[post,setPost]=useState<IPost>()
     const[comments,setComments]=useState<IComment[]>([])

    useEffect(()=>{
        (
            async()=>{
                let posts=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                setPost(posts.data)
            }
        )()
    },[id])

    useEffect(()=>{
        (
            async()=>{
                let comments=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                setComments(comments.data)
            }
        )()
    },[id])

  return (
    <div className='px-3 font-roboto min-h-[calc(100vh-60px)]'>
        <header className='w-full py-10 flex flex-col justify-center items-center bg-blue-900 text-blue-50 mb-4'>
            <h3 className='uppercase font-semibold text-2xl text-center'>Post Details</h3>           
        </header>

        <article className='font-roboto px-3 border-2 border-slate-400'>
            <h5 className='text-xl uppercase font-semibold font-roboto mt-8'>{post?.title}</h5>
            <p className='text-small font-roboto text-slate-600 w-full md:w-[80%] mt-4 first-letter:uppercase first-letter:text-xl first-letter:font-semibold'>{post?.body}</p>
            
            <h6 className='text-md uppercase pt-6 '>Comments</h6>

            <ul>
                {comments?.map(comment=>(
                <li key={comment.id} className='mb-4 odd:bg-white even:bg-slate-100 py-5'>
                    <div className='pl-6'>
                      <div className='flex justify-start items-start'>
                        <GoPrimitiveDot className='text-sm mr-2'/> 
                      <p className='text-sm first-letter:uppercase'>{comment.body}</p>
                      </div>
                       <div className='flex justify-start items-center pl-4'>
                       <AiOutlineUser className='text-xl'/>
                       <p className='text-xs mt-3 pl-6'> {comment.name}</p>
                       </div>
                      <div className='flex justify-start items-center pl-4'>
                      <AiOutlineMail/>
                        <p className='text-xs pl-6'>email: {comment.email}</p>
                      </div>
                    </div>
                </li>
                ))}
            </ul>
        </article>
    </div>
  )
}

export default Post