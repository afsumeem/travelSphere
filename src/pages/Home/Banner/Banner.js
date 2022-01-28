import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner-1.jpg';
import banner2 from '../../../images/banner-2.jpg';
import banner3 from '../../../images/banner-3.jpg';
import banner4 from '../../../images/banner-4.jpg';
import banner5 from '../../../images/banner-5.jpg';


const Banner = () => {

    return (
        <div className='banner'>

            <Carousel fade controls={false}
                style={{ "marginTop": "-100px" }}
            >

                <Carousel.Item >
                    <img
                        className="d-block w-100 banner-img opacity-25"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-content'>
                        <h1>Make Your Tour <span className='main-font-color'>Amazing</span>  <br /> With Us</h1>
                        <p>We are here to make your tour comfort!</p>
                        <Button variant="none" className='w-25 py-2 explore-button'>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Explore Your <br /><span className='main-font-color'>Travel</span></h1>
                        <p>We are here to make your tour comfort!</p>
                        <Button variant="none" className='w-25 py-2 explore-button'>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Explore The World <br />With <span className='main-font-color'>Ease</span></h1>
                        <p>We are here to make your tour comfort!</p>
                        <Button variant="none" className='w-25 py-2 explore-button'>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Make Your Tour <br /><span className='main-font-color'>Amazing</span> With Us</h1>
                        <p>We are here to make your tour comfort!</p>
                        <Button variant="none" className='w-25 py-2 explore-button'>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Travel Most <span className='main-font-color'>Beautiful</span> <br />Place With Us</h1>
                        <p>We are here to make your tour comfort!</p>
                        <Button variant="none" className='w-25 py-2 explore-button'>Explore</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;