import React,{useState} from 'react'
import ResumeStepsPage from './ResumeSecond'
import FileUploadBox from './FileUpload'

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
    <div>
        <ResumeStepsPage/>
    </div>
    </>
  )
}

export default Resume