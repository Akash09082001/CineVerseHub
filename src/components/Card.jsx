import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ poster_path, title, release_date, id, children }) => {
    return (
        <Link to={`/posts/${id}`}>
            <div className='flex flex-col gap-3 rounded-md w-full'>
                <div className="flex w-full rounded-md">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} loading='lazy' alt={title} className='flex w-full h-full object-contain rounded-md' />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <strong className='text-sm md:text-base text-white'>{title}</strong>
                    <div className="flex gap-1 text-xs md:text-sm text-gray-400 w-full">
                        {children}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
