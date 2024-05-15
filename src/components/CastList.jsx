import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CastList = () => {

    const { slug } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/${slug}/credits?api_key=532cba508f60c0af7df2fca57657a04b`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCasts(data.cast)
                })

        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div className="flex w-full h-fit overflow-x-auto overflow-y-hidden pb-3">
            <ul className='flex w-fit h-auto gap-3 justify-start'>
                {casts
                    .filter(cast => cast.profile_path)
                    .map(cast => (
                        <li key={cast.id ? cast.id : null} className='flex flex-col h-fit w-48 bg-white rounded-md'>
                            <div className="flex w-full h-fit rounded-md">
                                <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} loading='lazy' alt={cast.name} className='flex w-full h-full object-contain rounded-md' />
                            </div>
                            <div className="flex text-black py-1 gap-0.5 px-3 h-fit w-full flex-col ">
                                <strong className='text-sm'>{cast.name}</strong>
                                <span className='text-xs'>{cast.character}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default CastList
