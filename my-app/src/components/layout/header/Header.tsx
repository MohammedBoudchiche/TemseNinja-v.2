"use client";


import React from 'react'
import NavBar from '../navigation/navbar/NavBar'
import { ModeToggle } from '@/components/ModeToggle';


const Header = () => {
  return (
    <header className='flex items-center justify-between px-7 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 w-full'>
        <div>Logo</div>
        <NavBar/>
    </header>

  )
}

export default Header