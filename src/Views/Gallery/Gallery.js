import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Gallery.css';

import highlight1 from '../../vids/pao_highlight.mp4';
import james from '../../vids/james_highlight.mp4';

import thumbnail1 from '../../img/Thumbnail-img-BRIX.png';
import thumbnail2 from '../../img/Thumbnail-img-DRE.png';
import thumbnail3 from '../../img/Thumbnail-img-GECKZOID.png';
import thumbnail4 from '../../img/Thumbnail-img-HANGMAN.png';
import thumbnail5 from '../../img/Thumbnail-img-JAMES.png';
import thumbnail6 from '../../img/Thumbnail-img-JENNIERUBYJANE.png';
import thumbnail7 from '../../img/Thumbnail-img-JUICER.png';
import thumbnail8 from '../../img/Thumbnail-img-LONEWOLPH.png';
import thumbnail9 from '../../img/Thumbnail-img-NINI.png';
import thumbnail10 from '../../img/Thumbnail-img-PAO.png';
import thumbnail11 from '../../img/Thumbnail-img-PAPI.png';
import thumbnail12 from '../../img/Thumbnail-img-PRYME.png';
import thumbnail13 from '../../img/Thumbnail-img-RYU.png';
import thumbnail14 from '../../img/Thumbnail-img-SEPH.png';
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

<div>
    <Navbar />
    <div className="highlight-page" style={{ backgroundColor: '#38117A' }}>
        
        <div className='container-fluid d-flex flex-column'>
            <h1 className='highlight-title display-1 my-5'>Showcase 360</h1>
            <p className="highlight-description text-start text-sm-center fs-4">
                Show off your epic moments, jaw-dropping plays, and unforgettable highlights! This is your chance to shine and share your best gaming moments with the world. Whether it's an insane headshot, a clutch victory, or a mind-blowing combo, we want to see it all. Get ready to level up and make your mark in the highlight reel!
            </p>
        </div>

    <div className="highlight-cards">
        
        <div className='card'>  
        {playingCard === 1 ? (
            <video
            src={highlight1}
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
        {playingCard === 2 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail2}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(2)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(2)}>
            {playingCard === 2 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 3 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail3}
            alt="Thumbnail 2"
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
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail4}
            alt="Thumbnail 2"
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
            src={james}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail5}
            alt="Thumbnail 1"
            onClick={() => handleCardClick(5)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(5)}>
            {playingCard === 5 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

    </div>

    <div className="highlight-cards">

        <div className="card">
        {playingCard === 6 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail6}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(6)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(6)}>
            {playingCard === 6 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 7 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail7}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(7)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(7)}>
            {playingCard === 7 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 8 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail8}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(8)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(8)}>
            {playingCard === 8 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 9 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail9}
            alt="Thumbnail 1"
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
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail10}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(10)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(10)}>
            {playingCard === 10 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

    </div>

    <div className="highlight-cards">

        <div className="card">
        {playingCard === 11 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail11}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(11)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(11)}>
            {playingCard === 11 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 12 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail12}
            alt="Thumbnail 2"
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
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail13}
            alt="Thumbnail 1"
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
        {playingCard === 14 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail14}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(14)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(14)}>
            {playingCard === 14 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

        <div className="card">
        {playingCard === 15 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail15}
            alt="Thumbnail 2"
            onClick={() => handleCardClick(15)}
            />
        )}
        <div className="bottom-center">
            <button onClick={() => handleCardClick(15)}>
            {playingCard === 15 ? 'Go Back' : 'See Highlights'}
            </button>
        </div>
        </div>

    </div>

    <div className="highlight-cards">
        

        <div className="card">
        {playingCard === 16 ? (
            <video
            src={highlight1}
            ref={videoRef}
            autoPlay
            loop
            controls
            />
        ) : (
            <img
            src={thumbnail16}
            alt="Thumbnail 2"
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
