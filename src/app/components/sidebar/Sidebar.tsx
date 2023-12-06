"use client"
import React from 'react'
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { useEffect } from 'react';

export default  function Sidebar({session}: any) {
  const getUser =  async() =>{
    console.log('chamado aq', session.user.name)

  }
  useEffect(() =>{
    console.log('use effect do sidebar')
    getUser()
}, [])
    // const imageStyle: React.CSSProperties = {
    //     boxSizing: 'initial',}
  return (
    <>
    <aside className='bg-gray-c2 rounded-[8px] overflow-hidden w-full'>
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="user_image"
        className='w-full h-[72px] object-cover' />
        <div className='flex flex-col items-center mt-[-16px] gap-1'>
            <img src={session.user.image} className='w-[60px] h-[60px] rounded-[8px] border-4 '  alt="" />
            <strong>{session.user.name}</strong>
            <span>{session.user.profissao}</span>
        </div>
        <footer className='border-gray-800 border-t-[2px] mt-6 py-6 px-8'>
            <a href="#" className='w-full bg-transparent transition-all hover:bg-gray-c4 hover:text-white text-white h-[50px] font-bold px-6  border border-white rounded-[8px] flex items-center justify-center'>Editar meu perfil</a>
        </footer>
    </aside>
    
    </>
  )
}

