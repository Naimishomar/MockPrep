import React,{useState, useEffect} from 'react'
import {Button} from './ui/button'
import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"
import { Link } from 'react-router-dom'
import { useUser } from "../context/UserContext.jsx";

function Header() {
  const [username, setusername] = useState(null)
  const { user, logout } = useUser();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setusername(user);
    }
  }, []);

  return (
    <div className='w-full h-20 bg-black/90 text-white flex items-center justify-between px-8 fixed z-30'>
        <div className='w-12'>
            <Link to="/"><img className='invert' src="/image-removebg-preview.png" alt="logo" /></Link>
        </div>
        <div className='flex gap-5 items-center'>
          <Link to='/dashboard'>
          <Button className="bg-white text-black font-medium text-sm p-5 rounded-full cursor-pointer hover:bg-white/90"><i className="ri-speak-ai-line text-2xl"></i>Start Interview</Button>
          </Link>
          <i className="ri-bard-line text-2xl"></i>
          <Link to='https://drona-ohmm.onrender.com/'><Button className="text-white border-2 border-gray-600 font-medium text-sm p-5 rounded-full cursor-pointer hover:bg-black"><i className="ri-graduation-cap-line text-2xl"></i>Learning</Button></Link>
          <i className="ri-bard-line text-2xl"></i>
          <Link to='/resume'><Button className="bg-white text-black font-medium text-sm p-5 rounded-full cursor-pointer hover:bg-white/90"><i className="ri-booklet-line text-2xl"></i>Create Resume</Button></Link>
          <i className="ri-bard-line text-2xl"></i>
          <Link to='/news'><Button className="text-white border-2 border-gray-600 font-medium text-sm p-5 rounded-full cursor-pointer hover:bg-black"><i className="ri-newspaper-line text-2xl"></i>News</Button></Link>
        </div>
        <div>
          <Dialog>
              <DialogTrigger><i className="ri-menu-2-line text-2xl cursor-pointer bg-white/10 p-3 rounded-full"></i></DialogTrigger>
              <DialogContent className="bg-gradient-to-bl from-[#1a1a1a] via-[#2a2a2a] to-[#000000] shadow-2xl text-white border-none">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <img className='w-13 invert' src="/image-removebg-preview.png" alt="logo" />
                    <h1 className='text-2xl font-bold'>MockPrep</h1>
                  </DialogTitle>
                  <DialogDescription className="flex flex-col space-y-3 mt-5">
                      {(username)?(
                        <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">{user}</Button>):(<Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse"><Link to="/login">Login</Link></Button>)}
                    <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">Account</Button>
                    <Button className="bg-white/10 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">About Us</Button>
                    <Button className="bg-blue-400 py-6 rounded-full hover:bg-white hover:text-black cursor-pointer hover:animate-pulse">Premium Plan</Button>
                    <div className='mt-3 justify-center flex gap-4'>
                      <i class="ri-bubble-chart-line"></i>
                      <Link className='hover:text-white/60'>Terms & Conditions</Link>
                      <i class="ri-bubble-chart-line"></i>
                      <Link className='hover:text-white/60'>Contact</Link>
                      <i class="ri-bubble-chart-line"></i>
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
        </div>
    </div>
  )
}

export default Header