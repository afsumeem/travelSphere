import React from 'react';
import { Col, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Blog = ({ blog }) => {
    const { name, address, location, comment, expense, email, date, time, rating, image } = blog;
    return (
        <Col md={3}>
            <div className='overlay'>
                <div className='all-spot-section'>
                    <img src={`data:image/jpeg;base64,${image}`} alt="" className='img-fluid d-block' />
                    <div className='bg-opacity-75 bg-dark card-div w-100 py-2'>
                        <h3>{location}</h3>
                        <h5>{date}</h5>
                    </div>
                    <Button variant="none" className='view-details-spots'>
                        View Details
                    </Button>
                    <div>
                        <div className='ps-5'>
                            <StarRatings
                                rating={parseFloat(rating)}
                                starDimension="22px"
                                starSpacing="5px"
                                starRatedColor="#c13f22"
                                starEmptyColor='gray'
                            />
                        </div>
                        <h5>by: {name}</h5>
                        <p>{comment}</p>

                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Blog;