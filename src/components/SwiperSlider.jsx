// SwiperSlider.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SwiperSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Check if slides array is empty
    if (slides.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex w-full h-full text-white bg-center relative">
            <div className="absolute inset-0 flex items-center justify-center ">
                <img
                    className="object-cover object-center flex w-full h-full"
                    src={slides[currentIndex].bgUrl}
                    alt={slides[currentIndex].title}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center ">
                <div className=" flex h-full flex-col w-full max-w-7xl mx-auto p-4 rounded">
                    <div className="flex w-full">
                        <h2 className='text-2xl md:text-3xl lg:text-4xl w-fit mx-auto font-bold'>
                            <span>New Comming</span>&nbsp;
                            <span className='text-blue-600'>Movies</span>
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start w-full h-fit my-auto gap-5">
                        <div className="flex w-60 lg:w-80 h-fit rounded-xl">
                            <img src={slides[currentIndex].cardImg} alt="" className='flex w-full object-contain rounded-xl' />
                        </div>
                        <div className="flex flex-col w-full items-center md:items-start h-fit my-auto gap-5">
                            <div className="flex w-full gap-2 flex-col items-center md:items-start">
                                <h1 className='flex w-fit text-xl md:text-3xl font-bold text-center md:text-left text-blue-600 rounded-md'>{slides[currentIndex].title} </h1>
                                <span className='w-fit flex text-base text-center md:text-left'>{slides[currentIndex].releaseDate}</span>
                            </div>
                            <Link to={`/posts/${slides[currentIndex].id}`}>
                                <button className='flex bg-blue-600 px-5 py-2 rounded-md text-white'>
                                    See More Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white px-2 py-2 rounded-md focus:outline-none"
                onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white px-2 py-2 rounded-md focus:outline-none"
                onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default SwiperSlider;
