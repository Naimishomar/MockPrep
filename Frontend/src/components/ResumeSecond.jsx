import React from "react";
import { Link } from "react-router-dom";

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

export default function ResumeStepsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-10">
      <h1 className="text-4xl  font-bold mb-12 text-center">Make a Resume That Gets Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl text-center">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center gap-4 bg-black/40 px-4 py-8 rounded-2xl">
            <div className="text-7xl">{step.icon}</div>
            <div className="text-lg font-semibold max-w-xs">
              {step.title}
            </div>
          </div>
        ))}
      </div>
      <Link to='/resume'><button className="mt-16 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg cursor-pointer flex items-center gap-3">Create my resume<i className="ri-survey-line text-2xl"></i></button></Link>

    </div>
  );
}
