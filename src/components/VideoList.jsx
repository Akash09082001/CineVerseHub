import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <div className="flex w-full overflow-x-auto overflow-y-hidden pb-3">
            <ul className="flex w-fit gap-3">
                {videos.map(video => (
                    <li key={video.id} className="flex w-96 aspect-video rounded-md">
                        <iframe
                            title={video.name}
                            className='flex h-full w-full rounded-md'
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;
