import React from 'react'

const Experience = () => {
  return (
    <div className="py-10 bg-[#232325] mt-20" id="experience">
       <h2 className='text-4xl font-semibold mb-5'>Exper<span>ience</span></h2>
        
        <div className="mb-5 text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg transform hover:scale-105 transition-transform">
            <h3 className='text-xl font-bold'>Ideo</h3>
            <p className='text-gray-400'>(2020 - present)</p>
            <p className='text-gray-500 mt-2'>
                At FirstCompany since 2020, I've been a standout Web Designer, creating captivating 
                layouts and seamless user experiences. 
            </p>
        </div>

        <div className="h-0.5 w-[80%] bg-slate-400 my-1 mx-auto"></div>

        <div className="mb-5 text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg transform hover:scale-105 transition-transform">
            <h3 className='text-xl font-bold'>GitHub</h3>
            <p className='text-gray-400'>(2020 - present)</p>
            <p className='text-gray-500 mt-2'>
            At SecondCompany, as a Frontend Developer, I built responsive web components, collaborated with backend teams,
            and ensured code quality.
            </p>
        </div>

        <div className="h-0.5 w-[80%] bg-slate-400 my-1 mx-auto"></div>

        {/* Repeat the above structure for each experience */}
    </div>
  )
}

export default Experience
