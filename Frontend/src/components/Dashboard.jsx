import React,{useState, useEffect} from 'react'
import { Button } from './ui/button';

function Dashboard() {
    const headingText = ["Learn smarter with AI","Start giving interviews","Get industry news","Build your resume","Get consult with mentors"];
    const [heading, setHeading] = useState(headingText[0]);
    const [index, setIndex] = useState(0);
      
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headingText.length);
        }, 2000);
        return () => clearInterval(interval);
    });     
    useEffect(() => {
        setHeading(headingText[index]);
    }, [index]);


  return (
    <>
    <div className='h-screen w-full bg-black/70 mt-20 relative'>
        <i class="ri-bar-chart-box-ai-line text-5xl absolute rotate-12 text-blue-400 top-45 left-30 iconMove"></i>
        <i class="ri-presentation-fill text-5xl absolute rotate-12 text-pink-400 top-15 right-30 iconMove"></i>
        <i class="ri-chat-voice-ai-fill text-5xl absolute rotate-12 text-yellow-400 bottom-35 right-60 iconMove"></i>
        <div className="text-7xl font-bold text-center pt-30 bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent whitespace-nowrap">{heading}</div>

        <div className='flex justify-center'>
        <div className='w-200 flex flex-col overflow-hidden'>
            <div className='flex mt-8 whitespace-nowrap relative'>
                <div className='w-10 h-10 bg-gradient-to-r from-[#000] via-[#131313] to-transparent absolute left-0 z-20'></div>
                <div className='w-20 h-10 bg-gradient-to-r from-transparent via-[#131313] to-[#0c0c0c] absolute right-0 z-20'></div>
                <div className='flex slideRight gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
                <div className='flex slideRight gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
                <div className='flex slideRight gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
            </div>
            <div className='flex mt-5 whitespace-nowrap relative'>
                <div className='w-20 h-10 bg-gradient-to-r from-[#0c0c0c] via-[#131313] to-transparent absolute left-0 z-20'></div>
                <div className='w-20 h-10 bg-gradient-to-r from-transparent via-[#131313] to-[#0c0c0c] absolute right-0 z-20'></div>
                <div className='flex slideLeft gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
                <div className='flex slideLeft gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
                <div className='flex slideLeft gap-4'>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                    <p className='bg-white/10 px-4 py-2 rounded-full'>Want Try Something</p>
                </div>
            </div>
        </div>
        </div>
        <i class="ri-mouse-line absolute text-5xl left-[50%] bottom-20 translate-[-50%] cursor-pointer iconMove"></i>
    </div>
    <hr className='border-white/10' />
    <div className='h-screen w-full bg-black/80 flex justify-between'>
        <div className='w-[50%]'>
            <img src="https://imageio.forbes.com/specials-images/imageserve/663e3a5c927c44fd5629ad0f/product-visuals/0x0.png?format=png&crop=1586,891,x105,y0,safe&width=960" className='py-10 rounded-r-full h-full object-fill'/>
        </div>
        <div className='flex-1 px-6 py-10'>
            <h1 className='text-4xl font-bold bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'> Unlock Smarter Interview Insights with <span className='text-blue-300 font-bold text-5xl'>AI</span></h1>
            <p className='mt-3 text-xl bg-gradient-to-br from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'>Enhance your hiring process with our smart interview interface. <br /> Get real-time insights during virtual interviews, including:</p>
            <ul>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🎯 Interview Score: Instantly evaluate candidates based on technical skills and communication.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>📊 Comparative Analytics: Visualize how each candidate performs compared to the entire applicant pool.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>📝 Live Transcripts: Follow and review conversations with automated transcription.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>📈 Performance Feedback: Detailed AI-generated feedback helps you make informed, data-driven decisions.</li>
            </ul>
            <Button className="w-full h-12 mt-3 bg-blue-400">Start interview</Button>
        </div>
    </div>
    <hr className='border-white/10' />
    <div className='h-screen w-full bg-black/80 flex justify-between'>
        <div className='flex-1 px-6 py-10'>
            <h1 className='text-4xl font-bold bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'> Personalized <span className='text-pink-300 font-bold text-5xl'>AI</span> Learning Coach</h1>
            <p className='mt-3 text-xl bg-gradient-to-br from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'>Enhance your hiring process with our smart interview interface. <br /> Get real-time insights during virtual interviews, including:</p>
            <ul>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🎯 Identifies Weak Areas:Pinpoints the exact topics or skills where you need improvement.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>📚 Delivers Targeted Content:Provides personalized lessons, resources, and quizzes based on your needs.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🤖 Adapts in Real-Time:
                Dynamically adjusts learning paths as you improve or face new challenges.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🚀 Accelerates Learning:
                Helps you grow faster by focusing only on what matters most.</li>
            </ul>
            <Button className="w-full h-12 mt-3 bg-pink-300">Learn something</Button>
        </div>
        <div className='w-[50%]'>
            <img src="https://img.pikbest.com/wp/202405/computer-monitor-gamer-s-digital-haven-exploring-a-3d-dark-neon-workspace-with-and-luminescent-chair_9833057.jpg!w700wp" alt="" className='py-10 rounded-l-full h-full object-cover' />
        </div>
    </div>
    <hr className='border-white/10' />
    <div className='h-screen w-full bg-black/80 flex justify-between'>
            <div className='w-[50%]'>
                <img src="https://thumbs.dreamstime.com/b/modern-resume-design-workspace-black-background-job-application-358664911.jpg" alt="" className='py-10 rounded-r-full h-full object-fill' />
            </div>
            <div className='flex-1 px-6 py-10'>
            <h1 className='text-4xl font-bold bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'><span className='text-red-400 font-bold text-5xl'>AI</span>-Powered Resume Builder</h1>
            <p className='mt-3 text-xl bg-gradient-to-br from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'>Enhance your hiring process with our smart interview interface. <br /> Get real-time insights during virtual interviews, including:</p>
            <ul>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>⚙️ AI-Generated Content Suggestions:Instantly generate professional summaries, role descriptions, and skills based on your background.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>📐 Smart Formatting & Design:Automatically organize your resume with clean, ATS-friendly layouts that look polished and modern.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🎯 Job-Specific Optimization:Tailor your resume for each job with AI that aligns your content with the job description.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🔍 Real-Time Feedback
                :Get AI-powered tips to improve clarity, impact, and keyword usage.</li>
            </ul>
            <Button className="w-full h-12 mt-3 bg-red-400">Create your resume</Button>
        </div>
    </div>
    <hr className='border-white/10' />
    <div className='h-screen w-full bg-black/80 flex justify-between'>
            <div className='flex-1 px-6 py-10'>
            <h1 className='text-4xl font-bold bg-gradient-to-bl from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'>Real-Time Mentoring by <span className='text-yellow-400 font-bold text-5xl'>Human Experts</span></h1>
            <p className='mt-3 text-xl bg-gradient-to-br from-[#5c5c5c] via-[#7e7e7e] to-[#0b0b0b] bg-clip-text text-transparent'>Enhance your hiring process with our smart interview interface. <br /> Get real-time insights during virtual interviews, including:</p>
            <ul>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🧠 Expert-Led Sessions:
                Learn directly from experienced mentors who’ve been in your shoes — whether you're a beginner or leveling up.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>💬 Instant Doubt Resolution:Ask questions and get clear, actionable answers in real-time.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🎯 Personalized Guidance:Get advice tailored to your goals, skill level, and career path.</li>
                <li className='text-xl hover:text-white/80 blur-sm hover:blur-none mt-2'>🗓️ Flexible Scheduling:Book sessions when you need them — no long wait times or rigid hours.</li>
            </ul>
            <Button className="w-full h-12 mt-3 bg-yellow-400">Get experts mentoring</Button>
            </div>
            <div className='w-[50%]'>
                <img src="https://media.istockphoto.com/id/533241382/vector/mentoring-chart-with-keywords-and-icons-sketch.jpg?s=612x612&w=0&k=20&c=jrmrfgr8bVFD54ORCkgzt5GpldwHVxvQiwl8g1tOUGA=" alt="" className='py-10 rounded-r-full h-full object-fill invert-100' />
            </div>
    </div>
    </>
  )
}

export default Dashboard