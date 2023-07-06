import React from 'react';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css'
import slide_1_picture from '../../img/real-life-proam-1.jpg'
import slide_2_picture from '../../img/community-banner-1.png'
import slide_3_picture from '../../img/community-picture-2.jpg'

const About = () => {
    useEffect(() => {
        document.title = "2KLC | About Us"
      }, []);
    return (
        <div className="about_page">
            <Navbar />
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide_1_picture} className="d-block w-100 carousel-img carousel-img-1" alt=""></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_2_picture} className="d-block w-100 carousel-img" alt=""></img>
                    </div>
                    <div className="carousel-item">
                        <img src={slide_3_picture} className="d-block w-100 carousel-img" alt=""></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='about-section container-fluid p-3'>
                <div className='container-fluid border mt-3'></div>
                <p className='p-5 m-0 fs-4 text-start text-sm-center overflow-auto'>
                    This is a lively Filipino community dedicated to playing NBA2K. It consists of players, fans, and enthusiasts who share a passion for the popular basketball    video game series. The community is diverse, comprising individuals from different backgrounds, age groups, and gaming skill levels, all united by their love  for basketball and gaming. However, the NBA2KLC community currently faces a challlenge with a slow registration process that hinders its growth and engagement.
                </p>
                <div className='container-fluid border mb-3'></div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;