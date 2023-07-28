import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'
import './Gallery.css';

import paolo_herrera from '../../vids/paolo_herrera.mp4';
import james_lorete from '../../vids/james_lorete.mp4';
import aaron_garcia from '../../vids/aaron_garcia.mp4';
import daryn_gaces from '../../vids/daryn_gaces.mp4';
import rogelio_yulo_uy from '../../vids/rogelio_yulo_uy.mp4';
import miguel_reloj from '../../vids/miguel_reloj.mp4';


import thumbnail1 from '../../img/Thumbnail-img-BRIX.png';
import thumbnail3 from '../../img/Thumbnail-img-GECKZOID.png';
import thumbnail4 from '../../img/Thumbnail-img-HANGMAN.png';
import thumbnail5 from '../../img/Thumbnail-img-JAMES.png';
import thumbnail9 from '../../img/Thumbnail-img-NINI.png';
import thumbnail10 from '../../img/Thumbnail-img-PAO.png';
import thumbnail12 from '../../img/Thumbnail-img-PRYME.png';
import thumbnail13 from '../../img/Thumbnail-img-RYU.png';
import thumbnail15 from '../../img/Thumbnail-img-YUGIBOI.png';
import thumbnail16 from '../../img/Thumbnail-img-YUMMY.png';

const GalleryPage = () => {
  const [playingCard, setPlayingCard] = useState(null);
  const videoRef = useRef(null);

  const handleCardClick = (cardId) => {
    if (playingCard === cardId) {
      videoRef.current.pause();
      setPlayingCard(null);
    } else {
      setPlayingCard(cardId);
    }
  };

  useEffect(() => {
    document.title = "2KLC | Gallery"
  }, []);
  
return (

<div className='gallery-main-container'>
    <Navbar />
    <div className="highlight-page" style={{ backgroundColor: '#38117A' }}>
        
        <div className='text-gallery container-fluid d-flex flex-column p-3'>
            <div className='container-fluid border mt-3'></div>
            <h1 className='highlight-title display-1 my-5'>Showcase 360</h1>
            <p className="highlight-description text-start text-sm-center fs-4">
            Welcome to Showcase 360 - where gaming greatness shines! Dive into our Gallery, a captivating collection of epic moments and jaw-dropping highlights from our talented admins. Immerse yourself in the world of gaming brilliance and get inspired by the incredible skills on display.
            </p>
            <p className="highlight-description text-start text-sm-center fs-4">
            Are you ready to make your mark in the gaming community? Join us and become a member to unleash your full potential. As a member, you'll have the power to add your own mind-blowing highlights to our ever-growing collection. Don't miss this chance to be in the spotlight and share your gaming journey with fellow enthusiasts.
            </p>
            <div className='container-fluid border mt-3'></div>
        </div>
        <div className="highlight-card">
            <div className='card'>  
                {playingCard === 1 ? (
                    <video
                    src={aaron_garcia}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail1}
                    alt="Thumbnail 1"
                    onClick={() => handleCardClick(1)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(1)}>
                        {playingCard === 1 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 3 ? (
                    <video
                    src={paolo_herrera}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail3}
                    alt="Thumbnail 3"
                    onClick={() => handleCardClick(3)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(3)}>
                        {playingCard === 3 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 4 ? (
                    <video
                    src={daryn_gaces}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail4}
                    alt="Thumbnail 4"
                    onClick={() => handleCardClick(4)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(4)}>
                        {playingCard === 4 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 5 ? (
                    <video
                    src={james_lorete}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail5}
                    alt="Thumbnail 5"
                    onClick={() => handleCardClick(5)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(5)}>
                        {playingCard === 5 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 9 ? (
                    <video
                    src={miguel_reloj}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail9}
                    alt="Thumbnail 9"
                    onClick={() => handleCardClick(9)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(9)}>
                        {playingCard === 9 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 10 ? (
                    <video
                    src={paolo_herrera}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail10}
                    alt="Thumbnail 10"
                    onClick={() => handleCardClick(10)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(10)}>
                        {playingCard === 10 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 12 ? (
                    <video
                    src={paolo_herrera}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail12}
                    alt="Thumbnail 12"
                    onClick={() => handleCardClick(12)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(12)}>
                        {playingCard === 12 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 13 ? (
                    <video
                    src={rogelio_yulo_uy}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail13}
                    alt="Thumbnail 13"
                    onClick={() => handleCardClick(13)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(13)}>
                        {playingCard === 13 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 15 ? (
                    <video
                    src={paolo_herrera}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail15}
                    alt="Thumbnail 15"
                    onClick={() => handleCardClick(15)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(15)}>
                        {playingCard === 15 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
            <div className="card">
                {playingCard === 16 ? (
                    <video
                    src={paolo_herrera}
                    ref={videoRef}
                    autoPlay
                    loop
                    controls
                    />
                ) : (
                    <img
                    src={thumbnail16}
                    alt="Thumbnail 16"
                    onClick={() => handleCardClick(16)}
                    />
                )}
                <div className="bottom-center">
                    <button onClick={() => handleCardClick(16)}>
                        {playingCard === 16 ? 'Go Back' : 'See Highlights'}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</div>

  );
};

export default GalleryPage;
