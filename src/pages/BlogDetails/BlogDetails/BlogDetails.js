import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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
            <div style={{ "marginTop": "-50px" }} className='blog-detail-banner'>
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
                        <h2>{details.name}</h2>
                        <h2>{details.title}</h2>
                        <h2>{details.location}</h2>
                        <h2>{details.expense}</h2>
                        <h2>{details.email}</h2>
                        <h2>{details.date}</h2>
                        <h2>{details.time}</h2>
                        <h2>{details.rating}</h2>
                        <h2>{details.status}</h2>
                        <h2>{details.comment}</h2>
                    </Col>

                    <Col md={6}>

                        <img src={`data:image/jpeg;base64,${details.image}`} alt="" className='img-fluid d-block w-100' />

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default BlogDetails;
