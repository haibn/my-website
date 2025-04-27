import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      {/* Hero Section */}
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='bg-red-200 w-[1024px] h-screen flex flex-col justify-between'>
          
          <div >
            {/* Navbar */}
            <nav className="flex items-center justify-between p-8">

              {/* Logo */}
              <div className="text-2xl font-bold">
                <a href="/" className="font-medium text-5xl">h</a>
              </div>

              {/* Navbar links */}
              <div className="space-x-10">
                <a className="text-2xl hover:text-gray-400">work</a>
                <a className="text-2xl hover:text-gray-400">about</a>
                <a className="text-2xl hover:text-gray-400">contact</a>
              </div>
            </nav>
          </div>

          {/* My Name */}
          <div className='bg-yellow-400 flex flex-col items-center w-full'>
            <h3 className='w-full text-right font-medium text-[28px] bg-green-200 translate-y-[70%]'>web developer and designer</h3>
            <h1 className="text-[329px] font-medium text-white leading-none -py-5 bg-blue-200">HAIBIN</h1>
          </div>

        </div>
      </div>

      {/* Work Section */}
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='bg-red-200 w-[1024px] h-screen flex flex-col justify-between'>

          

        </div>
      </div>
    
    </>
  )
}

export default App
