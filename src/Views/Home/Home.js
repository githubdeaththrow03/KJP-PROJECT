import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import NavHome from '../../Components/NavHome/NavHome';
import Footer from '../../Components/Footer/Footer'
import './Home.css';
import axios from 'axios';


const Home = () => {
  const [playingCard, setPlayingCard] = useState(null);
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [playerCardFile, setPlayerCardFile] = useState(null);
  const [videoHighlightsFile, setVideoHighlightsFile] = useState(null);
  const [highlightData, setHighlightData] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (cardId) => {
    if (playingCard === cardId) {
      videoRef.current.pause();
      setPlayingCard(null);
    } else {
      setPlayingCard(cardId);
    }
  };

  const handleAddHighlightsClick = () => {
    setShowModal(true);
  };

  const handleAddFile = () => {
    setShowModal(false);
  
    if (playerCardFile && videoHighlightsFile) {
      const formData = new FormData();
      formData.append('uID', userData.uID);
      formData.append('username', userData.username);
      formData.append('playerCard', playerCardFile);
      formData.append('videoHighlight', videoHighlightsFile);
  
      axios
        .post('http://localhost:4000/users/highlights', formData)
        .then((response) => {
          console.log(response.data);
          fetchHighlightData(); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
    setPlayerCardFile(null);
    setVideoHighlightsFile(null);
  };
  
  

  const handleCloseModalClick = () => {
    setShowModal(false);
  };
  

  const handlePlayerCardFileChange = (e) => {
    const file = e.target.files[0];
    setPlayerCardFile(file);
  };
  
  const handleVideoHighlightsFileChange = (e) => {
    const file = e.target.files[0];
    setVideoHighlightsFile(file);
  };  

  const fetchHighlightData = () => {
    axios
      .get('http://localhost:4000/users/highlights')
      .then((response) => {
        console.log(response.data);
        setHighlightData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching highlights:', error);
      });
  };
  
  if (searchQuery === '') {
    fetchHighlightData();
} 

  const enterSearch = async (e) => {
    if (e.key === 'Enter') {
        const response = await axios.get(`http://localhost:4000/users/search?username=${searchQuery}`)
        setHighlightData(response.data);
        console.log(response.data);
    }
  };
  
  useEffect(() => {
    document.title = "2KLC | Home";
    fetchHighlightData();
  }, []);
  
return (

<div className='home-main-container'>
    <NavHome />
    <div className="highlight-Homepage ren" style={{ backgroundColor: '#38117A' }}>
        <div className='card-nav'>
            <div className="search-card">
                <input type="text" placeholder="Search Username" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={enterSearch}/>
            </div>
            <div className="add-highlights-button">
                <button onClick={handleAddHighlightsClick}>Add Your Highlights</button>
            </div>
        </div>
        {showModal && (
        <div className="modal">
            <div className="modal-content">
                <h2 className='titleC'>Add Your Highlights!</h2>
            <span className="close" onClick={handleCloseModalClick}>
                &times;
            </span>
            <p>Add Your Player Card:</p>
            <input
                className='input-file'
                type="file"
                accept="image/*"
                onChange={handlePlayerCardFileChange}
            />
            <p>Add Your Video Highlight:</p>
            <input
                className='input-file'
                type="file" 
                accept="video/*"
                onChange={handleVideoHighlightsFileChange}
            />
            <button className='add-button' onClick={handleAddFile}>Add</button>
            </div>
      </div>
    )}

        <div className="highlight-cards">
        {highlightData.map((highlight) => (
          <div className="card" key={highlight.id}>
            {playingCard === highlight.id ? (
              <video
                src={`http://localhost:4000/uploads/${highlight.videoHighlight}`}
                ref={videoRef}
                autoPlay
                loop
                controls
              />
            ) : (
              <img
                src={`http://localhost:4000/uploads/${highlight.playerCard}`}
                alt={`Thumbnail ${highlight.id}`}
                onClick={() => handleCardClick(highlight.id)}
              />
            )}
            <div className="bottom-center">
              <button onClick={() => handleCardClick(highlight.id)}>
                {playingCard === highlight.id ? 'Go Back' : 'See Highlights'}
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
    <Footer />
</div>

  );
};

export default Home;
