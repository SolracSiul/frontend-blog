"use client"
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Post from './components/post/Post'
import { PostType } from './components/post/Post';
import axiosFetch from './axios/config';
import { useEffect, useState } from 'react';
import CreatePost from './components/newpost/CreatePost';



export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  
  const getPosts =  async () =>{
      try{
        const response = await axiosFetch.get("/posts")
        const data = response.data;

        setPosts(data);
      } catch(error){
        console.log('erro', error)
      }
  }
  useEffect(() => {
    getPosts();
  }, [])
  return (
   <>
    <Header/>
    <div className="max-w-[70rem] mt-24 my-[2rem] flex flex-col items-center justify-center mx-auto py-0 px-[1rem] md:grid grid-cols-3 gap-4 md:items-start">
          <Sidebar/>
          <main className='w-full md:col-span-2 flex flex-col gap-6'>
            <CreatePost/>
            {posts.map(post =>(
              <Post post={post} key={post.id}/>
            ))}           
          </main>
    </div>
   </>
  )
}
