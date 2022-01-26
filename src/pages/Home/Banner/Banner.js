import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                style={{ "marginTop": "-10px" }}
            >

                <Carousel.Item >
                    <img
                        className="d-block w-100 banner-img opacity-25"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-content'>
                        <h1

                        >Make Your Tour Amazing With Us</h1>
                        <p>We are here to make your tour comfort!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-content'

                    >
                        <h1

                        >Second slide label</h1>
                        <p>We are here to make your tour comfort!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Third slide label</h1>
                        <p>We are here to make your tour comfort!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Third slide label</h1>
                        <p>We are here to make your tour comfort!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner-img opacity-25"
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carousel-content'>
                        <h1>Travel Most Beautiful Place With Us</h1>
                        <p>We are here to make your tour comfort!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;