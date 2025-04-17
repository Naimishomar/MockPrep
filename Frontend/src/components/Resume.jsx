import React,{useState} from 'react'
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
    const [selectInput, setselectInput] = useState('hardcoded');
    const [phoneNumber, setphoneNumber] = useState('')
    const [email, setemail] = useState('')
    const [github, setgithub] = useState('')
    const [college, setcollege] = useState('')
    const [year, setyear] = useState('')
    const [acheivements, setacheivements] = useState('')

    const scrollToTop = () => {
        window.scrollTo({
           top: 0,
           behavior: "smooth",
        });
    };

  return (
    <>
    <div className='mt-20 w-full h-screen p-7 flex'>
        <i class="ri-presentation-fill text-5xl absolute rotate-12 text-pink-400 bottom-5 left-80 iconMove"></i>
        <i class="ri-chat-voice-ai-fill text-5xl absolute rotate-12 text-yellow-400 top-35 right-108 iconMove"></i>
        <div className='w-[65%]'>
            <h1 className='text-6xl font-bold text-pink-400'>Build Your Dream Resume <br />in Minutes with AI</h1>
            <p className='text-xl font-semibold'>Say Goodbye to Templates — Let AI Build Your Resume</p>
            <p className='mt-10 text-2xl'>Land your next job with one of the best AI resume builders online. <br /> Work from your computer or phone with dozens of recruiter- <br />approved templates and add ready-to-use skills and phrases <br /> in one click. Millions have trusted our resume maker — and <br /><span className='text-4xl text-yellow-300 font-bold'>it’s free to use!</span></p>
            <Dialog>
              <DialogTrigger><button className='mt-4 bg-blue-500 px-7 py-3 rounded-sm w-70 justify-center flex gap-2 font-bold items-center text-xl cursor-pointer hover:bg-blue-700'>Create my resume<i className="ri-survey-line text-2xl"></i></button></DialogTrigger>
              <DialogContent className="bg-gradient-to-bl from-[#1a1a1a] via-[#2a2a2a] to-[#000000] shadow-2xl text-white border-none overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <img className='w-13 invert' src="/image-removebg-preview.png" alt="logo" />
                    <h1 className='text-2xl font-bold'>MockPrep</h1>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col space-y-3 mt-3">
                      <div className='flex justify-evenly items-center gap-10'>
                        <button className='text-xl text-white bg-blue-500 hover:text-blue-500 hover:bg-white px-16 py-2 rounded font-semibold w-full' onClick={()=> setselectInput('hardcoded')}>Hello</button>
                        <button className='text-xl text-white bg-blue-500 hover:text-blue-500 hover:bg-white px-16 py-2 rounded font-semibold w-full' onClick={()=> setselectInput('brief')}>Guys</button>
                      </div>
                      <div>{(selectInput === 'hardcoded')?(
                        <>
                        <div>
                            <h1 className='text-2xl font-bold text-center mt-1 bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent whitespace-nowrap'>Enter your details</h1>
                            <div className='flex gap-4 items-center'>
                                <div className='mt-2 w-[35%]'>
                                    <label>Phone Number:</label>
                                    <input type="text" placeholder='Phone number' value={phoneNumber} onChange={(e)=> setphoneNumber(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none '/>
                                </div>
                                <div className='mt-2 flex-1'>
                                    <label>Email:</label>
                                    <input type="text" placeholder='Your email' value={email} onChange={(e)=> setemail(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none '/>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <label>Github ID:</label>
                                <input type="text" placeholder='Your github Id' value={github} onChange={(e)=> setgithub(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none '/>
                                <label>{(github.length<=0)?(<p>Required</p>): (<></>)}</label>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='mt-2 w-[70%]'>
                                    <label>Education:</label>
                                    <input type="text" placeholder='College name' value={college} onChange={(e)=> setcollege(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none '/>
                                </div>
                                <div className='mt-2 flex-1'>
                                    <label>Passing Year:</label>
                                    <input type="text" placeholder='Passing year' value={year} onChange={(e)=> setyear(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none '/>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <label>Acheivements:</label>
                                <input type="text" placeholder='Acheivements' value={acheivements} onChange={(e)=> setacheivements(e.target.value)} className='w-full border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none'/>
                                <label>{(acheivements.length>100)?(<></>):(<p>{100-acheivements.length} words left</p>)}</label>
                            </div>
                            <button className='w-full py-2 bg-blue-500 text-white cursor-pointer mt-2 rounded flex items-center justify-center hover:bg-blue-600'>Get Resume<i className="ri-arrow-right-line text-2xl"></i></button>
                        </div>
                        </>
                      ):(
                        <>
                        <textarea placeholder='Give a brief discussion about yourself and your projects' className='w-full min-h-[150px] border p-2 placeholder:text-gray-500 text-gray-200 rounded outline-none resize-none'/>
                        <button className='w-full py-2 bg-blue-500 text-white cursor-pointer mt-2 rounded flex items-center justify-center hover:bg-blue-600'>Get Resume<i className="ri-arrow-right-line text-2xl"></i></button>
                        </>
                      )}</div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
        <button onClick={scrollToTop} className="mt-16 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-3">Create my resume<i className="ri-survey-line text-2xl"></i></button>
        </div>
    </>
  )
}

export default Resume