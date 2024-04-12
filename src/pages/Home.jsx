import React from 'react'
import Slider from '../components/Slider';
import Trending from '../components/Trending';

const Home = () => {


    return (
        <div className='text-white w-full flex flex-grow flex-col '>
            <Slider />
            <Trending />
        </div>
    )
}

export default Home