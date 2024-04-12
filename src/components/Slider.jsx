import React, { useEffect, useState } from 'react';
import SwiperSlider from './SwiperSlider';

const Slider = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=532cba508f60c0af7df2fca57657a04b`);
                const data = await response.json();
                console.log(data.results);
                const processedSlides = data.results.map((movie) => ({
                    bgUrl: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                    title: movie.title,
                    overview: movie.overview,
                    id: movie.id,
                    cardImg: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    releaseDate: movie.release_date

                }));
                // Sort the slides by release date in descending order (latest first)
                processedSlides.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                setSlides(processedSlides);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-screen md:h-[730px] overflow-hidden">
            <SwiperSlider slides={slides} />
        </div>
    );
};

export default Slider;
