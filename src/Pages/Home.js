import React from 'react';
import image from "../Pages/dice-img.png";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-slate-50'>
            <div className='mb-8'>
                <img src={image} alt='Dice picture' className='w-full max-w-xs md:max-w-lg drop-shadow-2xl' />
            </div>
            <div className='flex flex-col items-center gap-5'>
                <div className='dicefont text-2xl md:text-5xl lg:text-6xl text-center md:flex-row flex-col'>
                    Dice Game
                </div>
                <button
                    onClick={() => navigate('/game')}
                    className='rounded-md bg-black text-lg md:text-xl px-4 py-2 md:px-6 md:py-3 text-white font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                >
                    Play Now
                </button>
            </div>
        </div>
    );
};

export default Home;
