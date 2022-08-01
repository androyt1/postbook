import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../interfaces/post'
import {IUser} from '../interfaces/user'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

const Home = () => {
    
    const[posts,setPosts]=useState<IPost[]>([])
    const[users,setUsers]=useState<IUser[]>([])

    useEffect(()=>{
        (async()=>{
            let posts=await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(posts.data)
            setPosts(prevPost => [...prevPost].sort(() => Math.random() - 0.5))
        })()
    },[])

    // const shuffle=()=>{
    //     setPosts(prevPost => [...prevPost].sort(() => Math.random() - 0.5))
    // }

    useEffect(()=>{
        (
            async()=>{
                let users=await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(users.data)
            }
        )()
    },[])

  

   
    // Pagination Code goes here
     // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<IPost[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  // Here we use item offsets; we could also use page offsets 
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage:number=10 

  useEffect(() => {
    // Fetch items from another resources.    
    const endOffset = itemOffset + itemsPerPage;   
    setCurrentItems(posts.slice(itemOffset, endOffset)); 
    setPageCount(Math.ceil(posts.length / itemsPerPage));
  }, [itemOffset,posts]);
  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;   
    setItemOffset(newOffset);
  };



  return (
    <div className='px-3 font-roboto min-h-[calc(100vh-60px)]'>
        <header className='w-full py-10 flex flex-col justify-center items-center text-blue-50 bg-blue-900 mb-6'>
            <h1 className='uppercase font-semibold text-3xl md:text-4xl text-center'>PostBook</h1>
            <p className='w-full md:w-[80%]  text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo aspernatur .</p>
        </header>

        <section className='w-full'> 
            {
                posts && currentItems.map(post=>(
                <div key={post.id} className='py-4 px-3 odd:bg-white even:bg-slate-100'>
                   <div className='w-full text-slate-700'>
                     <Link to={`/posts/${post.id}`}><span className='uppercase font-semibold'>{post.title}</span></Link>
                   </div>
                  <div className='pl-5'>
                  <Link to={`/user/${users.find(user=>user.id===post.userId)?.id}`}><span className='text-xs'> {users.find(user=>user.id===post.userId)?.name}</span></Link>
                  </div>
                </div>
                ))
            }
        </section>

        <>
     
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"        
          containerClassName="flex justify-center items-center w-full px-3 py-8 gap-2 md:gap-5"
          pageClassName=' text-slate-900 px-1 md:px-3 text-xs py-1'
          previousClassName='border-2 border-blue-900 text-blue-900 px-1 md:px-3 text-xs py-1'
          nextClassName='border-2 border-blue-900 text-blue-900 px-1 md:px-3 text-xs py-1'
          activeClassName='bg-blue-900 text-slate-50 px-1 md:px-3 text-xs py-1'
        />      
    </>
    </div>
  )
}

export default Home