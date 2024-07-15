"use client"

import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaDownload } from 'react-icons/fa6'
import { LinkPreview } from './ui/LinkPerview'
import { image } from '@/data'
// import xlogo from "../public/xlogo.png";
// import github from "../public/gitmove.png";
// import linkdin from "../public/inkdin.png";
// import FloatingIcons from './ui/FlotingIcons'

const Hero = () => {

  const handleResume = () => {
    try {
      const link = document.createElement('a');
      link.href = "https://drive.google.com/uc?export=download&id=14TjMwXeawmbIJl0fumhbVYy5jN1KBIjt";
      link.setAttribute('download', 'Navneet Resume.pdf'); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // After a 1-second delay, view the resume
      setTimeout(() => {
        window.open("https://drive.google.com/file/d/14TjMwXeawmbIJl0fumhbVYy5jN1KBIjt/view?usp=sharing", "_blank");
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div className='pb-20 pt-36'>
     
        <div>
       <Spotlight className='-top-40 -left-10 md:-left-32
       md:-top-20 h-screen' fill='white'/>
       <Spotlight className='top-10 left-full h-[80vh]
       w-[50vw]' fill='purple'/>
       <Spotlight className='top-28 left-80 h-[80vh]
       w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
        flex items-center justify-center 
        absolute top-0 left-0">
      
      <div className="absolute pointer-events-none 
      inset-0 flex items-center justify-center 
      dark:bg-black-100 bg-white 
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>


    <div className='flex justify-center relative my-20
    z-10'>
        <div className='max-w-[89vw] md:max-w-2xl
        lg:max-w-[60vw] flex flex-col items-center 
        justify-center'>
            {/* <h2 className='uppercase tracking-widest
            text-xs text-center text-blue-100 max-w-80'>
                Dynamic Web Magic with Next.js
            </h2> */}

            <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl
            lg:text-6xl'
            words='Transforming Concepts into Seamless User Experiences'
            />

<p className="flex items-center justify-center text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
    Hello, I&apos;m 
     <LinkPreview url='https://x.com/Navi9971'>
      <span className='ml-2 text-purple font-bold'> Navneet Kumar,</span>
    </LinkPreview>
     a Frontend Developer based in 
     
     <LinkPreview url={image.delhi}>
     <span className='ml-2 text-purple font-bold'>Delhi</span>
     </LinkPreview>
    </p>
    {/* <FloatingIcons>
      <img id="x" src={xlogo.src} width={40} height={40} className="cursor-pointer" alt="Developer logo" />
      <img id="git" src={github.src} width={26} height={26} className="cursor-pointer" alt="Developer logo" />
      <img id="linkdin" src={linkdin.src} width={27} height={27} className="cursor-pointer" alt="Developer logo" />
    </FloatingIcons> */}
    

<div className='flex items-center justify-center gap-10'>
            <a href='#project'>
                <MagicButton
                title= "Show my work"
                icon= {<FaLocationArrow />}
                position='right'
                />
            </a>
            <a>
                <MagicButton
                handleClick={handleResume}
                title= "Resume"
                icon= {<FaDownload />}
                position='right'
                />
            </a>
            </div>
        </div>


    </div>
        </div>
  )
}

export default Hero