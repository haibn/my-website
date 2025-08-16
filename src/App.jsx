import { useState, useRef, useEffect } from 'react'
import './App.css'
import tadaima from './assets/photos/tadaima.jpeg'
import cityhall from './assets/photos/cityhall.png'
import postit from './assets/photos/post-it.png'
import uspApp from './assets/work/uspGrantApp.png'
import radiateWebsite from './assets/work/radiateSfWebsite.png'
import yulisBar from './assets/work/yulisBarWebsite.png'
import practicumApp from './assets/work/practicumProject.png'
import ritWebsite from './assets/work/ritWebsite.png'
import resume from './assets/icons/resumeIcon.png'
import gsap from 'gsap'
import SplitType from 'split-type'

function App() {
  const workRef = useRef();
  const aboutRef = useRef();
  const heroRef = useRef();

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  {/* Scroll and highlight contact icons */}
  const handleConnectClick = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    setTimeout(() => {
      const icons = document.querySelectorAll('.icons');
      const text = document.querySelector('.letsConnect')
      
      icons.forEach((icon) => {
        icon.classList.add('highlighted');
      });

      text.classList.add('letsConnectHighlighted')

      setTimeout(() => {
        text.classList.remove('letsConnectHighlighted')
        icons.forEach((icon) => {
          icon.classList.remove('highlighted');
        });
      }, 1200);
    }, 800);
  };

  {/* Animation */}
  useEffect(() => {
    if (window.innerWidth > 769) {
      const haibin = new SplitType('#haibin', { types: 'chars' });
    
      const tl = gsap.timeline();
    
      tl.from('.char', {
        y: 200,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power3.out',
      })
    
      .to(['#subtitle', '#navbar'], {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, []);
  

  return (
    <>
    {/* Navbar */}
    <div id='navbar' className='opacity-100 xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-100
    fixed w-full z-100'>
      <div className='flex w-full justify-center'> 

        <nav className="w-[1050px] flex justify-between items-center p-8 bg-black">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a onClick={() => scrollToSection(heroRef)}className="font-medium text-5xl cursor-pointer">h</a>
          </div>

          {/* Navbar links */}
          <div className="flex space-x-10">
            <a onClick={() => scrollToSection(workRef)} className="cursor-pointer transition-colors duration-300 
            hidden xl:block lg:block md:block sm:block text-2xl hover:text-gray-400">work</a>
            <a onClick={() => scrollToSection(aboutRef)} className="cursor-pointer transition-colors duration-300 
            hidden xl:block lg:block md:block sm:block text-2xl hover:text-gray-400">about</a>
            <a onClick={() => handleConnectClick()} className="cursor-pointer transition-colors duration-300 
            text-2xl hover:text-gray-400">contact</a>
          </div>
        </nav>

      </div>
    </div>

    <div className='sm:h-0'>
      
      {/* Hero Section */}
      <div id="hero" ref={heroRef} className='hidden xl:block lg:block md:block sm:hidden'>
        <div className='h-screen w-full flex justify-center items-center overflow-hidden'>
          <div className='w-[1024px] h-full flex flex-col justify-end'>

            {/* My Name */}
            <div className='flex flex-col items-center w-full 
            translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[5%] md:translate-y-[10%] sm:translate-y-[30%] 
            scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
            hidden xl:block lg:block md:block sm:block'>
              <h3 id='subtitle' className='opacity-100 xl:opacity-0 lg:opacity-0 md:opacity-0 sm:opacity-100  
              w-full text-right font-medium text-[28px] translate-y-[70%]'>web developer and designer</h3>
              <h1 id="haibin" className="w-1000 text-[324px] font-medium text-white leading-none -py-5 ">HAIBIN</h1>
            </div>

          </div>
      </div>

      </div>

      {/* Work Section */}
      <div className='w-full flex flex-col justify-center items-center gap-3 overflow-hidden pt-30 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-30'>

        {/* Photo and button */}
        <div className='w-[1060px] flex gap-3 justify-center xl:justify-end lg:justify-end md:justify-end sm:justify-end 
        xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
        translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-2%] md:translate-y-[-5%] sm:translate-y-[-23%]'>
          
          <div className='flex flex-col gap-3 items-center xl:items-end lg:items-end md:items-end sm:items-end'>
            <img src={cityhall} className='w-70 xl:w-121 lg:w-121 md:w-121 sm:w-121 object-contain rounded-4xl'></img>
            <h1 className='block xl:hidden lg:hidden md:hidden sm:hidden
            text-[37px] font-bold'>Haibin Yu</h1>
            <h2 className='-mt-5 block xl:hidden lg:hidden md:hidden sm:hidden
            text-xs'>web developer and designer</h2>
            <h3 className='block xl:hidden lg:hidden md:hidden sm:hidden
            text-lg mb-5 text-center w-[280px]'>I turn ideas into websites that look good and actually works!</h3>
            <button id="work" ref={workRef} className='cursor-pointer hover:bg-white hover:text-black transition-colors duration-300
            hidden xl:block lg:block md:block sm:block
            bg-black w-70 xl:w-121 lg:w-121 md:w-121 sm:w-121 
            h-10 xl:h-45 lg:h-45 md:h-45 sm:h-45 
            rounded-xl xl:rounded-4xl lg:rounded-4xl md:rounded-4xl sm:rounded-4xl shadow-lg 
            ring-2 xl:ring-4 lg:ring-4 md:ring-4 sm:ring-4 ring-white'
            onClick={handleConnectClick}>
              <p className='text-2xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl'>Let's connect!</p>
            </button>
          </div>

          {/* Yu and Post-it */}
          <div className='flex flex-col items-start hidden xl:block lg:block md:block: sm:block'>
            <h1 className="text-[329px] font-medium text-white leading-none">YU</h1>
            <img src={postit} className='w-87.5'></img>
          </div>
        </div>

        {/* Radiate website and USP Grant app */}
        <div className='w-[1060px] flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center items-center gap-3 
        scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
        translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-20%] md:translate-y-[-43%] sm:translate-y-[-137%]'>
            <a href='https://docs.google.com/presentation/d/1Pe83Xs3qVMzYping3CqAipRlh2I4_54aVakG1XWUBTk/edit?usp=sharing' target='_blank'>
              <img src={uspApp} className='cursor-pointer hover:scale-103 duration-500 transition-transform
              h-auto xl:h-74 lg:h-74 md:h-74 sm:h-74 
              w-70 xl:w-auto lg:w-auto md:w-auto sm:w-auto 
              object-contain rounded-2xl'></img>
            </a>
            <a href='https://www.figma.com/design/RjHEHBCFYSE5b2TthglYnh/Radite-SF-Website?node-id=0-1&t=rDEhwKUpR6JWFreP-1' target='_blank'>
              <img src={radiateWebsite} className='cursor-pointer hover:scale-103 duration-500 transition-transform 
              h-auto xl:h-74 lg:h-74 md:h-74 sm:h-74 
              w-70 xl:w-auto lg:w-auto md:w-auto sm:w-auto 
              object-contain rounded-2xl'></img>
            </a>
        </div>

        {/* Yulis Bar and RIT Website */}
        <div className='w-[1060px] flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center items-center gap-3 
        scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
        translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-23%] md:translate-y-[-47%] sm:translate-y-[-143%]'>
            <a href='https://www.figma.com/design/aFdV7c951TkFf2ohrlasD2/Yulisbar-SF?node-id=0-1&t=83wmIl8C7N0gLC92-1' target='_blank'>
              <img src={yulisBar} className='cursor-pointer hover:scale-103 duration-500 transition-transform 
              h-auto xl:h-102.5 lg:h-102.5 md:h-102.5 sm:h-102.5 
              w-70 xl:w-auto lg:w-auto md:w-auto sm:w-auto 
              object-contain rounded-2xl'></img>
            </a>
            <a href='https://www.figma.com/design/z007629c7sludq6kgAJu6B/RIT-Website-Redesign?node-id=359-434&t=Bqv1wSxcY8xcDPE6-1' target='_blank'>
              <img src={ritWebsite} className='cursor-pointer hover:scale-103 duration-500 transition-transform 
              h-auto xl:h-102.5 lg:h-102.5 md:h-102.5 sm:h-102.5 
              w-70 xl:w-auto lg:w-auto md:w-auto sm:w-auto 
              object-contain rounded-2xl'></img>
            </a>
        </div>
      
      </div>

      {/* About Section */}
      <div id="about" ref={aboutRef} className='w-full flex flex-col justify-center items-center gap-3 overflow-hidden translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-20%] md:translate-y-[-40%] sm:translate-y-[-130%]'>
        <div className="w-[220px] xl:w-[830px] lg:w-[830px] md:w-[830px] sm:w-[830px]
        border-t-5 border-dashed border-white my-6 scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50"></div>

        <div className=' w-[830px] flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row 
        items-center xl:items-start lg:items-start md:items-start sm:items-start gap-3 
        scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
        translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-0%] md:translate-y-[-10%] sm:translate-y-[-30%]'>
          <p className='font-medium text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl 
          w-70 xl:w-500 lg:w-500 md:w-500 sm:w-500 
          text-right xl:text-left lg:text-left md:text-left sm:text-left'>Hello.</p>
          <p className='font-regular text-1xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl
          w-70 xl:w-auto lg:w-auto md:w-auto sm:w-auto text-right'>I'm Haibin, a UC Berkeley grad with a background in Electrical Engineering and Computer Science, now channeling my passion for design into building thoughtful, intuitive websites. I’m especially drawn to the intersection of technology and user experience—where creativity meets problem-solving.</p>
        </div>
        
        <br></br>

        <div id="contact" className='w-[830px] flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row
        items-center xl:items-start lg:items-start md:items-start sm:items-start gap-3 
        scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 
        translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-50%] md:translate-y-[-100%] sm:translate-y-[-300%]'>
          <p className='font-medium text-2xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl 
          w-70 xl:w-500 lg:w-500 md:w-500 sm:w-500 letsConnect'>Let's connect.</p>
          <div className='w-auto xl:w-300 lg:w-300 md:w-300 sm:w-300 flex justify-end gap-3'>
            <a href='https://drive.google.com/file/d/1ahlKLc3i591PFcUz7XlP7MIMLajAcuep/view?usp=sharing' target='_blank'>
              <img src={resume} className='h-15 object-contained cursor-pointer hover:scale-113 duration-500 transition-transform'></img>
            </a>
            <a href='https://www.instagram.com/haibny/' target='_blank'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icons cursor-pointer hover:text-[#7eee3e]" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href='https://www.linkedin.com/in/haibinyu/' target='_blank'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icons cursor-pointer hover:text-[#7eee3e]" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href='https://github.com/haibn' target='_blank'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="icons cursor-pointer hover:text-[#7eee3e]" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
          </div>
        </div>
        
        <div className="w-[220px] xl:w-[830px] lg:w-[830px] md:w-[830px] sm:w-[830px] 
        border-t-5 border-dashed border-white my-6 scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-50 translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-500%] md:translate-y-[-1500%] sm:translate-y-[-4500%]"></div>
      </div>

      {/* Footer Section */}
      <div className='w-[full] h-[100px] flex justify-center items-start gap-3 overflow-hidden scale-100 xl:scale-100 lg:scale-90 md:scale-80 sm:scale-57 translate-y-[0%] xl:translate-y-[0%] lg:translate-y-[-140%] md:translate-y-[-310%] sm:translate-y-[-950%]'>
        <p className="w-[full] xl:w-[830px] lg:w-[830px] md:w-[830px] sm:w-[full] font-extralight text-sm">© 2025 All rights reserved</p>
      </div>
      
    </div>
    </>
  )
}

export default App
