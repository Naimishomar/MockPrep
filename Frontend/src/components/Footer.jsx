import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>  
    <div className='w-full bg-black/80 flex justify-between px-20 py-10'>
      <div>
        <div className='flex items-center font-bold'>
          <img src="/image-removebg-preview.png" className='invert w-15' />
          <p className='text-3xl'>MockPrep</p>
        </div>
        <p className='font-semibold'>India's first AI interviewer</p>
        <p className='text-xl mt-5 text-white/60'>Contact Us:<span className='font-bold text-white'>naimishomar@gmail.com</span></p>
        <p className='mt-5 font-semibold'>©️MockPrep Community, 2025</p>
      </div>
      {/* Right Side */}
      <div>
        <p>About</p>
      </div>
      <div className='text-center'>
        <div>Newsletter Subscription</div>
        <div className='flex justify-center mt-3 bg-white/15'>
          <input type="text" placeholder='Subscribe to our newsletter' className='p-2 w-60'/>
          <button className='bg-pink-400 px-3'>Subscribe</button>
        </div>
      </div>
    </div>
    <hr className='border-1 mx-25 border-white/40'/>
    <div className='w-full max-h-screen'>
        <div className='flex gap-10 py-20 justify-center bg-black/80'>
          <Link><i class="ri-twitter-x-fill text-3xl hover:text-blue-500 border-2 p-2 rounded-full"></i></Link>
          <i className="ri-bard-line text-2xl"></i>
          <Link><i class="ri-linkedin-fill text-3xl hover:text-blue-600 border-2 p-2 rounded-full"></i></Link>
          <i className="ri-bard-line text-2xl"></i>
          <Link><i class="ri-instagram-line text-3xl hover:text-pink-500 border-2 p-2 rounded-full"></i></Link>
        </div>
    </div>
    </>
  )
}

export default Footer