import "bootstrap/dist/css/bootstrap.css";
import './Home.css'
import HeaderHome from '../HeaderHome/HeaderHome'

import aboutUs from '../../img/imageThree.jpg';
import highlightsCard from '../../img/homeTwo.jpg';
import communityCard from '../../img/homeOne.jpg';

function Home() {
  return (
    <div className="HomePage">
      <HeaderHome />     
      <div className="image-container">
        <div className="image-card">
          <a href="registration">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="image-content">
                    <h2 className="image-title">Join Our Community</h2>
                  </div>
                  <img src={communityCard} alt="Card 1" className="imageOne" />
                </div>
                <div className="flip-card-back">
                  <div className="image-content">
                    <h2 className="image-title">Join Our Community</h2>
                    <p className="image-description">
                      Be part of our vibrant community of basketball enthusiasts and unlock thrilling opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="image-card">
          <a href="gallery">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="image-content">
                    <h2 className="image-title">Show Your Skills</h2>
                  </div>
                  <img src={highlightsCard} alt="Card 2" className="imageTwo" />
                </div>
                <div className="flip-card-back">
                  <div className="image-content">
                    <h2 className="image-title">Show Your Skills</h2>
                    <p className="image-description">
                      Share your finest moves! Let your talent shine and motivate others within the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="image-card">
          <a href="about">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="image-content">
                    <h2 className="image-title">Discover Our Story</h2>
                  </div>
                  <img src={aboutUs} alt="Card 3" className="imageThree" />
                </div>
                <div className="flip-card-back">
                  <div className="image-content">
                    <h2 className="image-title">Discover Our Story</h2>
                    <p className="image-description">
                      Explore inspiring tales of dedicated players. Uncover our origin, values, and captivating journey of our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
