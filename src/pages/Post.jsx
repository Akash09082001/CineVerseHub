import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import VideoList from '../components/VideoList';
import CastList from '../components/CastList';

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    color: 'black',
    bgcolor: 'white',
    boxShadow: 24,
    gap: '10px',
    p: 2,
};

function Post() {
    const { slug } = useParams();
    const [movieData, setMovieData] = useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${slug}?language=en-US&api_key=532cba508f60c0af7df2fca57657a04b&append_to_response=videos,images,runtime`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                console.log(data);
                setMovieData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [slug]);

    if (!movieData) {
        return <div>Loading...</div>;
    }

    const bgPoster = `https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`;
    const banner = `https://image.tmdb.org/t/p/original/${movieData.belongs_to_collection ? movieData.belongs_to_collection.backdrop_path : ''}`;
    const release_date = `${movieData.release_date}`;
    const getYear = new Date(release_date).getFullYear();

    return (
        <div className="flex w-full h-full text-white bg-center relative lg:bg-fixed bg-[length:auto_100%]  bg-no-repeat after:bg-black after:z-10 after: after:w-full after:flex after:bg-opacity-60" style={{ backgroundImage: `url(${bgPoster})` }}>
            <div className="flex flex-col flex-grow h-full w-full absolute z-20 top-0 left-0 right-0 overflow-y-scroll">
                <div className="flex w-full flex-col max-w-7xl mx-auto gap-5 px-5 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full md:h-fit">
                        <div className="flex w-full h-auto items-center justify-center md:justify-start">
                            <div className="flex w-full max-w-72 md:max-w-64 h-fit">
                                <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt={movieData.name} loading='lazy' className='flex w-full h-fit object-contain' />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full h-auto md:col-span-2 xl:col-span-3">
                            <div className="flex flex-col gap-2 w-full items-start justify-center md:justify-start">
                                <h1 className='flex text-2xl lg:text-3xl font-bold text-center'>
                                    <span>{movieData.title}</span>
                                    &nbsp;
                                    <span className='text-blue-600 font-normal'>({getYear})</span>
                                </h1>
                                <p className='text-sm md:text-base flex flex-col w-full'>
                                    <span className='text-yellow-500'>{movieData.status}</span>
                                    <span>{movieData.release_date}</span>
                                    <span className='gap-2 flex w-fit'>
                                        {movieData.spoken_languages.map(language => (
                                            <span key={language.iso_639_1}>{language.name}</span>
                                        ))}
                                    </span>
                                    <span className='gap-2 flex w-fit'>
                                        {movieData.genres.map(genre => (
                                            <span key={genre.id}>{genre.name}</span>
                                        ))}
                                    </span>
                                </p>
                            </div>
                            <p className='text-sm md:text-base '><strong className='text-blue-600'>Overview :</strong> {movieData.overview}</p>
                            <h3 className='text-lg font-bold'>{movieData.tagline}</h3>
                            <div className="flex w-full">
                                <button onClick={handleOpen} className='flex w-fit gap-2 px-8 py-2 rounded-md text-white bg-blue-600'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span>Watch Trailer</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style} className="rounded-md">
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {movieData.title}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{}}>
                                    {movieData.videos && movieData.videos.results && movieData.videos.results.length > 0 && (
                                        <div className="flex w-96 aspect-video rounded-md">
                                            <iframe
                                                title={movieData.videos.results[0].name}
                                                className='flex h-full w-full rounded-md'
                                                src={`https://www.youtube.com/embed/${movieData.videos.results[0].key}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    )}
                                </Typography>

                            </Box>
                        </Fade>
                    </Modal>
                    <div className="flex flex-col w-full  gap-5 ">
                        <div className="flex w-full">
                            <h2 className='flex text-2xl font-bold'>Movie Cast</h2>
                        </div>
                        <div className="flex w-full h-fit">
                            <CastList />
                        </div>
                    </div>
                    <div className="flex flex-col w-full  gap-5 ">
                        <div className="flex w-full">
                            <h2 className='flex text-2xl font-bold'>Movie Videos</h2>
                        </div>
                        <div className="flex w-full h-fit ">
                            <VideoList videos={movieData.videos.results} />
                        </div>
                    </div>
                    <div className="flex w-full h-52 md:h-60 relative rounded-md bg-no-repeat bg-center bg-contain md:bg-cover after:bg-black after:z-10 after: after:w-full after:flex after:bg-opacity-60 after:rounded-md" style={{ backgroundImage: `url(${banner})` }}>
                        <h3 className='absolute text-2xl md:text-3xl lg:text-4xl text-center font-bold flex w-full z-20 h-full items-center justify-center'>{movieData.tagline}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
