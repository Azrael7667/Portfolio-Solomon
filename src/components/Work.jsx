// import React from 'react'
// import proj1 from '../assets/proj1.png'
// import proj2 from '../assets/proj2.png'
// import proj3 from '../assets/proj3.png'
// import proj4 from '../assets/proj4.png'
// const work = () => {
//   return (
//     <div class = "py-6 max-w-[1200px] mx-auto" id='work'>
//         <div class = "mx-auto px-4 md:px-8">
//             <div class = "mb-4 flex items-center justify-between gap-8">
//                 <div class = "flex flex-col gap-4">
//                     <h2 class = "text-2xl lg:text-3xl text-white">
//                         My <span>Projects</span>
//                     </h2>
//                     <p class = "text-gray-500">
//                         These are my projects for different clients.
//                     </p>
//                 </div>
//             </div>

//             <div class ="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

//                 <a href='/' class = "group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
//                     <img src={proj1} alt='' class ="h-full object-cover object-center
//                      transition duration-200 group-hover:scale-110"/>
//                 </a>



//                 <a href='/' class = "group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
//                     <img src={proj2} alt='' class =" w-full h-full object-cover object-center
//                      transition duration-200 group-hover:scale-110"/>
//                 </a>


//                 <a href='/' class = "group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
//                     <img src={proj3} alt='' class ="w-full h-full object-cover object-center
//                      transition duration-200 group-hover:scale-110"/>
//                 </a>

//                 <a href='/' class = "group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
//                     <img src={proj4} alt='' class ="h-full object-cover object-center
//                      transition duration-200 group-hover:scale-110"/>
//                 </a> 
//             </div>
//         </div>

//     </div>
//   )
// }


// export default work

/* <button
onClick={() => handleCategoryClick('All')}
className={`text-gray-500 ${selectedCategory === 'All' ? 'text-blue-500' : ''} hover:text-white focus:outline-none border border-white  rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] md:py-3 md:px-6 sm:py-2 sm:px-5`}
>
All
</button>
{categories.map((category, index) => (
<button
    onClick={() => handleCategoryClick(category)}
    className={`text-gray-500 ${selectedCategory === category ? 'text-blue-500' : ''} hover:text-white focus:outline-none  border border-white  rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] md:py-3 md:px-6  sm:py-2 sm:px-5`}
    key={index}
>
    {category}
</button> */


import React, { useState } from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'

function Work({ darkMode }) {
    const projects = [
        { type: 'Website', image: proj1 },
        { type: 'UI/UX Design', image: proj2 },
        { type: 'App Development', image: proj3 },
        { type: 'Website', image: proj4 },
    ]

    const categories = ['Website', 'UI/UX Design', 'App Development']

    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'All') return true
        return project.type === selectedCategory
    })

    return (
        <div>
            <h2 class="text-2xl lg:text-3xl text-white">
                    My <span>Projects</span>
                </h2>
            <div className="flex justify-center space-x-5 mt-5">
            
                <button
                    onClick={() => handleCategoryClick('All')}
                    className={`text-gray-500 ${selectedCategory === 'All' ? 'text-blue-500' : ''} hover:text-white focus:outline-none border ${darkMode ? 'border-white' : 'border-gray-500'} rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] md:py-3 md:px-6 sm:py-2 sm:px-5`}
                >
                    All
                </button>
                {categories.map((category, index) => (
                    <button
                        onClick={() => handleCategoryClick(category)}
                        className={`text-gray-500 ${selectedCategory === category ? 'text-blue-500' : ''} hover:text-white focus:outline-none border ${darkMode ? 'border-white' : 'border-gray-500'} rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] md:py-3 md:px-6  sm:py-2 sm:px-5`}
                        key={index}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8 mt-8">
                {filteredProjects.map((project, index) => (
                    <div
                        onClick={() => handleCategoryClick(project.type)}
                        className="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80  cursor-pointer"
                        key={index}
                    >
                        <a href='/'>
                            <img src={project.image} alt='' className="h-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work




