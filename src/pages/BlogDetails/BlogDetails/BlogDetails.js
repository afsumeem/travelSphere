import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './BloDetails.css'

const BlogDetails = () => {

    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://mighty-waters-53050.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);


    return (
        <>
            <Navigation />
            <div style={{ "marginTop": "-150px" }} className='blog-detail-banner'>
                {
                    details.image2 ?
                        <img src={details.image2} alt="" className='img-fluid d-block w-100 opacity-25'
                            style={{ "height": "70vh" }}
                        />
                        :
                        <img src={`data:image/jpeg;base64,${details.image}`} alt="" className='img-fluid d-block w-100 opacity-25' />
                }

            </div>

            <Container >
                <Breadcrumb className=' fs-3'>
                    <Breadcrumb.Item href="/home">Blogs</Breadcrumb.Item>
                    <Breadcrumb.Item active>{details.location}</Breadcrumb.Item>
                </Breadcrumb>
                <hr />

                <Row className='my-5'>
                    <Col md={6} className='mb-5'>

                        <h2 class="main-font-color fw-bold">{details.title}</h2>

                        <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: {details.name}</p>

                        <br /><br />
                        <h2>{details.location}</h2>
                        <p>{details.comment}</p>
                        <br /><br />
                        <h5>Total Cost: <span className="fs-3">${details.expense}</span></h5>
                        <h5>Departure Date: {details.date}</h5>
                        <h5>Time: {details.time}a.m</h5>

                        <div className='text-center'>
                            <StarRatings
                                rating={parseFloat(details.rating)}
                                starDimension="22px"
                                starSpacing="5px"
                                starRatedColor="#ff7c5b"
                                starEmptyColor='gray'
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        {
                            details.image ?
                                <img src={`data:image/jpeg;base64,${details.image}`} alt="" className='img-fluid d-block w-100' />
                                :
                                <img src={details.image2} alt="" className='img-fluid d-block w-100'
                                    style={{ "height": "70vh" }} />
                        }

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default BlogDetails;
