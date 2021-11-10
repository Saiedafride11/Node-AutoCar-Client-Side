import React from 'react';
import './Banner.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.ibb.co/syr6y6h/banner-1.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1>WELCOME TO AUTO CAR</h1>
                        <p>We are provide best services. Amet repellendus qui alias neque facere quibusdam ex est.</p>
                        <Link to="/cars">
                            <Button variant="contained" sx={{ width: 300 }}>View ALL Car</Button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/VQFRHj2/banner-2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1>BEST PLACE FOR SELL CAR!</h1>
                        <p>We are provide best services. Amet repellendus qui alias neque facere quibusdam ex est.</p>
                        <Link to="/cars">
    <                       Button variant="contained" sx={{ width: 300 }}>View ALL Car</Button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ibb.co/jJKtw9k/banner-3.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h1>FIND YOUR DREAM CAR</h1>
                        <p>We are provide best services. Amet repellendus qui alias neque facere quibusdam ex est.</p>
                        <Link to="/cars">
                            <Button variant="contained" sx={{ width: 300 }}>View ALL Car</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;