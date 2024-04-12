import React, { useEffect, useState } from 'react';
import Card from './Card';

const Trending = () => {
    const [trendings, setTrendings] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'api_key=532cba508f60c0af7df2fca57657a04b';
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_URL = BASE_URL + 'trending/all/week?' + API_KEY;

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const filterMovie = data.results.filter(item => item.media_type === "movie");
                const sortedTrendings = filterMovie.sort((a, b) => b.vote_average - a.vote_average);
                setTrendings(sortedTrendings);
                setLoading(false);
                console.log(data);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col py-5 px-5 lg:py-10 w-full h-fit'>
            <div className="flex w-full flex-col gap-5 max-w-7xl mx-auto">
                <div className="flex w-full">
                    <h2 className='flex w-fit text-2xl md:text-3xl font-bold'>Trending Movie In This Week</h2>
                </div>
                <div className="flex w-full overflow-x-auto overflow-y-hidden pb-3">
                    <ul className="flex w-fit gap-5 justify-start">
                        {trendings.map(trending => (
                            <li key={trending.id} className='flex w-48 rounded-md'>
                                <Card {...trending} >
                                    <span >vote:</span>
                                    <span className='text-white'>{trending.vote_average}</span>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Trending;
