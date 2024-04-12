import React, { useEffect, useState } from 'react';
import Card from './Card';

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'api_key=532cba508f60c0af7df2fca57657a04b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_URL = BASE_URL + 'discover/movie?sort_by=popularity.desc&' + API_KEY;

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const movieSortByReleaseData = data.results.sort((a, b) => {
                    const dataB = new Date(b.release_date);
                    const dataA = new Date(a.release_date);
                    return dataB - dataA;
                });
                setMovies(movieSortByReleaseData);
                setLoading(false);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col w-full max-w-7xl mx-auto'>
            <div className="flex flex-col gap-5 w-full p-5">
                <div className="flex w-full">
                    <h2 className='flex w-fit text-white text-2xl md:text-3xl font-bold'>All Movies</h2>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 w-full'>
                    {movies.map(movie => (
                        <li key={movie.id} className='flex w-full rounded-md'>
                            <Card {...movie} >
                                <span >Release Date :</span>
                                <span className='text-white'>{movie.release_date}</span>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
