import React from 'react'
import profilepic from '../assets/solomon.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {


    return (
        <div>
            <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row
                         justify-between align-center ' id='home'>


                <div className='w-full md:w-1/2 flex-col my-auto'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 text-center md:text-left mt-5'>Hi I'm Solomon</p>
                    <h1 className='md:text-7xl sm:text-6xl text-center md:text-left mb-2 text-4xl font-bold md:py-6'><TypeAnimation

                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Webdesigner",
                            1000,
                            "Consultant",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>
                    <div className='flex items-center justify-center '>
                        <p className='md:text-5xl sm:text4xl text-xl  md:text-left font-bold text-gray-500'>with a 5+ years experience</p>
                    </div>
                    <div className='text-5xl flex justify-center md:justify-start gap-16 my-7 text-purple-600'>
                        <a href="https://www.linkedin.com/in/silwal-solomon-5bba1b27a/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
                        <a href="https://github.com/Azrael7667" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        <a href="https://www.instagram.com/silwalsolomon/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
                    </div>
                    <div class="relative flex justify-center md:justify-start group my-3">
                        <div class="absolute transition-all duration-1000 opacity-70 -insert-px bg-gradient-to-r
                from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                group-hover:-insert-1 group-hover:duration-200">
                        </div>
                        <a href='./Profile.pdf' title='Download CV' role='button'
                            class='w-[190px] h-[60px] relative inline-flex items-center px-8 py-4 text-lg
                 font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'>Download CV</a>
                    </div>
                </div>


                <div className='my-auto'>
                    <img className='w-[300px] md:w-[500px] mx-auto rounded-full mt-[-20px]' src={profilepic} alt="profile pic" />
                </div>


            </div>
            
            </div>

            );
};

            export default Hero
