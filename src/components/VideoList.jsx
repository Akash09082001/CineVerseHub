import React from 'react';

const VideoList = ({ videos }) => {
    return (
        <div>
            <div className="flex w-full overflow-x-scroll overflow-y-hidden pb-3">
                <div className="flex w-fit gap-3">
                    {videos.map(video => (
                        <div key={video.id} className="flex w-96 aspect-video rounded-md">
                            <iframe
                                title={video.name}
                                className='flex h-full w-full rounded-md'
                                src={`https://www.youtube.com/embed/${video.key}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoList;
