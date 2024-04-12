import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ children }) => {
    return (
        <div className='flex flex-grow w-full bg-home-banner bg-no-repeat bg-center bg-cover items-center justify-center relative after:bg-black after:z-10 after:h-full after:w-full after:flex after:bg-opacity-60'>
            <div className="absolute h-full w-full max-w-7xl z-20 px-5">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
                    <div className="flex w-full">
                        <div className="flex flex-col w-full h-fit my-auto gap-10">
                            <strong className="flex w-full items-center justify-center lg:justify-start text-2xl lg:text-4xl">
                                <span className="text-blue-600">CineVerse</span>
                                <span className='text-white'>Hub</span>
                            </strong>
                            <div className="flex w-full items-center justify-center lg:justify-start flex-col gap-2">
                                <span className='w-full items-center justify-center lg:justify-start text-white flex text-center lg:text-left '>Where Every Frame Tells a Tale</span>
                                <h1 className='flex w-full text-center lg:text-left text-4xl text-white font-bold '>Experience Cinematic Marvels</h1>
                                <p className='flex w-full text-center lg:text-left text-white mx-auto'>Enter a world where tales defy time. Explore cinema's wonders—from classics to modern gems. Discover magic, fuel your imagination, and embark on an unforgettable silver screen adventure.</p>
                            </div>
                            {/* <div className="flex gap-5 w-full items-center justify-center lg:justify-start">
                                <Link to='/signup' className='flex w-fit px-8 py-2 rounded-md text-white backdrop-blur-sm bg-white bg-opacity-20'>Register</Link>
                                <Link to='/login' className='flex w-fit px-8 py-2 rounded-md text-white bg-blue-600'>Sign In</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex w-full h-fit my-auto justify-center md:justify-end">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
