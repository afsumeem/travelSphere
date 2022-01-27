import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

import Blogs from '../TravellersBlog/Blogs/Blogs';
import TopSpots from './TopSpots/TopSpots/TopSpots';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Row gx="5" className='mt-5'>
                <Col md={8}>
                    <Blogs />
                </Col>

                <Col md={4} className='border-start'>
                    <TopSpots />
                </Col>
            </Row>
            <Footer />
        </div >
    );
};

export default Home;