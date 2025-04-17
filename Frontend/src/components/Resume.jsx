import React,{useState} from 'react'
import FileUploadBox from './FileUpload'
import { Link } from 'react-router-dom'
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Button } from './ui/button'

const steps = [
    {
      number: "1",
      title: "Choose a recruiter-approved template",
      icon: "📄"
    },
    {
      number: "2",
      title: "Add skills and bullet points in one click",
      icon: "📝"
    },
    {
      number: "3",
      title: "Finish your resume in minutes",
      icon: "📃"
    },
    {
      number: "4",
      title: "Download in Word, PDF and more",
      icon: "📥"
    }
  ];

function Resume() {
    const [file, setfile] = useState(false)
  return (
    <>
    <div className='mt-20 w-full h-screen p-7 flex'>
        <i class="ri-presentation-fill text-5xl absolute rotate-12 text-pink-400 bottom-5 left-80 iconMove"></i>
        <i class="ri-chat-voice-ai-fill text-5xl absolute rotate-12 text-yellow-400 top-35 right-108 iconMove"></i>
        <div className='w-[65%]'>
            <h1 className='text-6xl font-bold text-pink-400'>Build Your Dream Resume <br />in Minutes with AI</h1>
            <p className='text-xl font-semibold'>Say Goodbye to Templates — Let AI Build Your Resume</p>
            {(file)?(
                <>
                <FileUploadBox/>
                </>
            ):(
                <>
                <p className='mt-10 text-2xl'>Land your next job with one of the best AI resume builders online. <br /> Work from your computer or phone with dozens of recruiter- <br />approved templates and add ready-to-use skills and phrases <br /> in one click. Millions have trusted our resume maker — and <br /><span className='text-4xl text-yellow-300 font-bold'>it’s free to use!</span></p>
                <button className='mt-4 bg-blue-500 px-7 py-3 rounded-sm w-70 justify-center flex gap-2 font-bold items-center text-xl cursor-pointer hover:bg-blue-700' onClick={()=>setfile(true)}>Create my resume<i className="ri-survey-line text-2xl"></i></button>
                </>
            )}
        </div>
        <div className='flex-1'>
            <img src="/resume.avif" className='object-cover' />
        </div>
    </div>
    <hr className='border-gray-700'/>
    <div className="flex flex-col items-center justify-center text-white px-4 py-10">
        <h1 className="text-4xl  font-bold mb-12 text-center">Make a Resume That Gets Results</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl text-center">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-4 bg-black/40 px-4 py-8 rounded-2xl">
            <div className="text-7xl">{step.icon}</div>
            <div className="text-lg font-semibold max-w-xs">{step.title}</div>
            </div>
        ))}
        </div>
        <Dialog>
              <DialogTrigger><i className="ri-menu-2-line text-2xl cursor-pointer bg-white/10 p-3 rounded-full"></i></DialogTrigger>
              <DialogContent className="bg-gradient-to-bl from-[#1a1a1a] via-[#2a2a2a] to-[#000000] shadow-2xl text-white border-none">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <img className='w-13 invert' src="/image-removebg-preview.png" alt="logo" />
                    <h1 className='text-2xl font-bold'>MockPrep</h1>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col space-y-3 mt-5">
                      <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse"><Link to="/login">Login</Link></Button>
                    <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">Account</Button>
                    <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">History</Button>
                    <Button className="bg-blue-400 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">Premium Plan</Button>
                    <div className='mt-3 justify-center flex gap-4'>
                      <Link className='hover:text-white/60'>Terms</Link>
                      <i class="ri-bubble-chart-line"></i>
                      <Link className='hover:text-white/60'>Contact</Link>
                      <i class="ri-bubble-chart-line"></i>
                      <Link className='hover:text-white/60'>About</Link>
                    </div>
                    <div className='flex justify-center items-center mt-2 gap-8'>
                      <Link><i class="ri-twitter-x-fill text-2xl hover:text-blue-500"></i></Link>
                      <Link><i class="ri-linkedin-fill text-2xl hover:text-blue-600"></i></Link>
                      <Link><i class="ri-instagram-line text-2xl hover:text-pink-500"></i></Link>
                    </div>
                    <p className='text-center mt-4 hover:text-purple-500'>Made by Artificial Engineers</p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
          </Dialog>
        <Link to='/resume'><button className="mt-16 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-3">Create my resume<i className="ri-survey-line text-2xl"></i></button></Link>
        </div>
    </>
  )
}

export default Resume