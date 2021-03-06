import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const Blog = ({ blog }) => {
    const { _id, name, location, title, comment, date, rating, image, image2 } = blog;
    return (
        <Col md={6} lg={4} sm={6} xs={12} className='py-5 '>
            <div className='overlay'>
                <div className='all-spot-section'>
                    {
                        image2 ?
                            <img src={image2} alt="" className='img-fluid d-block' />
                            :
                            <img src={`data:image/jpeg;base64,${image}`} alt="" className='img-fluid d-block' />
                    }

                    <div className='bg-opacity-75 bg-dark card-div w-100 py-2'>
                        <h3>{location}</h3>
                        <h5>{date}</h5>
                    </div>
                    <Button as={Link} to={`/blogs/${_id}`} variant="none" className='view-details-spots'>
                        View Details
                    </Button>

                </div>
            </div>
            <div>
                <div className='text-center'>
                    <StarRatings
                        rating={parseFloat(rating)}
                        starDimension="22px"
                        starSpacing="5px"
                        starRatedColor="#ff7c5b"
                        starEmptyColor='gray'
                    />
                </div>
                <h5>{title}</h5>
                <p className='my-3' style={{ color: "gray", fontStyle: "italic" }}>by: {name}</p>
                <p>{comment.slice(0, 100)}</p>

                <Link to={`/blogs/${_id}`}>
                    Continue Reading
                </Link>
            </div>
        </Col>
    );
};

export default Blog;