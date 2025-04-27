import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tadaima from './assets/photos/tadaima.jpeg'
import postit from './assets/photos/post-it.png'
import uspApp from './assets/work/uspGrantApp.png'
import radiateWebsite from './assets/work/radiateSfWebsite.png'
import yulisBar from './assets/work/yulisBarWebsite.png'
import practicumApp from './assets/work/practicumProject.png'

function App() {

  return (
    <>
      {/* Hero Section */}
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='bg-red-200 w-[1024px] h-screen flex flex-col justify-between'>
          
          <div >
            {/* Navbar */}
            <nav className="flex items-center justify-between py-8">

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
      <div className='w-full flex flex-col justify-center items-center gap-3'>

        <div className='bg-red-200 w-[1060px] flex gap-3 justify-end'>
          {/* Photo and button */}
          <div className='flex flex-col gap-3 items-end'>
            <img src={tadaima} className='w-121 object-contain rounded-4xl'></img>
            <button className='bg-black w-121 h-45 rounded-4xl shadow-lg ring-4 ring-white'>
              <p className='text-6xl'>Let's connect!</p>
            </button>
          </div>

          {/* Yu and Post-it */}
          <div className='flex flex-col items-start'>
            <h1 className="text-[329px] font-medium text-white leading-none">YU</h1>
            <img src={postit} className='w-87.5'></img>
          </div>
        </div>

        <div className='bg-blue-200 w-[1060px] flex justify-center gap-3'>
            <img src={uspApp} className='h-74 object-contain rounded-2xl'></img>
            <img src={radiateWebsite} className='h-74 object-contain rounded-2xl'></img>
        </div>

        <div className='bg-blue-200 w-[1060px] flex justify-center gap-3'>
            <img src={yulisBar} className='h-102.5 object-contain rounded-2xl'></img>
            <img src={practicumApp} className='h-102.5 object-contain rounded-2xl'></img>
        </div>
        
        <div className="w-[1060px] border-t-3 border-dashed border-white my-6"></div>
      </div>

    
    </>
  )
}

export default App
