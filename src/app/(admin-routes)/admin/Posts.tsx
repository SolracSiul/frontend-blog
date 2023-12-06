"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import CreatePost from '@/app/components/newpost/CreatePost'
import Post from '@/app/components/post/Post'
import { PostType } from '@/app/components/post/Post'
import axiosFetch from '@/app/axios/config'

function Posts({session}: any) {
    console.log(session.user.name)
    const [posts, seetPosts] = useState<PostType[]>([]);

    const getPosts = async () =>{
        try{
            const response = await axiosFetch.get("/posts")
            const data = response.data;
            seetPosts(data)
        }catch(error){
            console.log("erro: ", error)
        }
    }
    const reloadPosts = () =>{
        getPosts()
    }
    useEffect(() =>{
        getPosts()
    }, [])
  return (
    <>
    <div className="max-w-[70rem] flex flex-col items-center justify-center mx-auto py-0 px-[1rem] md:grid grid-cols-3 gap-4 md:items-start">
          <Sidebar session={session}/>
          <main className='w-full md:col-span-2 flex flex-col gap-6'>
            <CreatePost reloadPosts={reloadPosts}/>
            {posts.reverse().map(post =>(
              <Post post={post} key={post.id}/>
            ))}           
          </main>
    </div>
    
    </>
  )
}

export default Posts