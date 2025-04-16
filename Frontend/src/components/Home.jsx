import React,{useState} from 'react'
import Interview from './Interview'
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

function Home() {
  const [click, setclick] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [experience, setexperience] = useState([]);
  const [duration, setduration] = useState('')


  const handleChange = (e) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(values);
    console.log(values);
  };

  const handleExperience = (e) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setexperience(values);
    console.log(values);
  };

  const handleDuration = (e) => {
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setduration(values);
    console.log(values);
  };

  const start=()=>{
    setInterval(() => {
      setclick(true)
    },1000);
  }

  return (
    <div className='mt-20 h-screen w-full bg-black/70 flex justify-center '>
      {(click)?(
        <Interview/>
      ):(
        <>
        <div>
          <Dialog>
              <DialogTrigger className='px-5 py-3 bg-blue-500 rounded text-white flex items-center justify-center gap-2 text-xl cursor-pointer'>Click to start<i className="ri-add-line text-2xl"></i></DialogTrigger>
              <DialogContent className="bg-gradient-to-bl from-[#1a1a1a] via-[#2a2a2a] to-[#000000] shadow-2xl text-white border-none">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <img className='w-13 invert' src="/image-removebg-preview.png" alt="logo" />
                    <h1 className='text-2xl font-bold'>MockPrep</h1>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col space-y-3 mt-5">
                  <div>
                    <label>Choose your skill:</label>
                    <select value={experience} onChange={handleChange} className='w-full bg-white/10 h-10 rounded px-2 mt-1 focus:outline-none'>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="Fullstack Web Developer">Fullstack Web Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Android Developer">Android Developer</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="AR/VR Developer">AR/VR Developer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label>Experience:</label>
                    <select value={selectedOptions} onChange={handleExperience} className='w-full bg-white/10 h-10 rounded px-2 mt-1 focus:outline-none'>
                      <option value="Fresher">Fresher</option>
                      <option value="1 year">1 year</option>
                      <option value="2 year">2 year</option>
                      <option value="5+ year">5+ year</option>
                    </select>
                  </div>
                  <div>
                    <label>Upload Resume:</label>
                    <input type="file" className='w-full bg-white/10 h-10 rounded p-2 mt-1 focus:outline-none'/>
                  </div>
                  <div>
                    <label>Interview Duration:</label>
                    <select value={duration} onChange={handleDuration} className='w-full bg-white/10 h-10 rounded px-2 mt-1 focus:outline-none'>
                      <option value="5 min">5 min</option>
                      <option value="10 min" disabled>10 min</option>
                      <option value="15 min" disabled>15 min</option>
                      <option value="30 min" disabled>30 min</option>
                    </select>
                  </div>
                  <Button className="bg-blue-400 py-5" onClick={start}>Start Now<i class="ri-arrow-right-line text-2xl"></i></Button>
                  <div className='flex justify-center items-center mt-2 gap-8'>
                    <Link><i class="ri-twitter-x-fill text-2xl hover:text-blue-500"></i></Link>
                    <Link><i class="ri-linkedin-fill text-2xl hover:text-blue-600"></i></Link>
                    <Link><i class="ri-instagram-line text-2xl hover:text-pink-500"></i></Link>
                  </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
          </Dialog>
        </div>
        </>
      )
      }
    </div>
  )
}

export default Home