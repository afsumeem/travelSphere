import axios from 'axios';
import React from 'react';
import { Col, Collapse, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./WriteBlog.css";
import { useStars } from "stars-rating-react-hooks";


const fileInput = React.createRef();

const WriteBlog = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    const config = {
        totalStars: 5,
        initialSelectedValue: 2,
        renderFull: '★',
        renderEmpty: '☆',
    };

    const {
        stars,
        getStarProps,
        getStarWrapperProps
    } = useStars(config);

    // handle submit button 
    const onSubmit = data => {

        let image = fileInput.current.files[0];

        const formData = new FormData();

        for (var key in data) {
            formData.append(key, data[key]);
        }

        formData.append('image', image);

        axios.post('http://localhost:5000/blogs', formData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert("Blog Added successfully");
                    reset();
                }
            })
    };


    return (
        <div className='form-container'>

            <Container className='w-75 d-block m-auto bg-white p-5'>
                <h1 className="text-uppercase">Share Your Experience</h1>
                <p>Travel businesses highly depend upon what tourists think about their holiday. Please do not hesitate to give feedback.</p>

                <Form className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col>
                            <label className="" for="name">Your Name</label><br />
                            <input className="w-75 p-2" name="name" defaultValue={user.displayName} {...register("name")} />
                            <br />
                            <label className="" for="address">Your Address</label><br />
                            <input className="w-75 p-2" placeholder="Address"{...register("address", { required: true })} /> <br />


                            <label className="" for="destination">Tour Destination</label><br />
                            <input className="w-75 p-2" placeholder="Tour Destination"{...register("location", { required: true })} /> <br />


                            <label className="" for="expense">Trip Cost</label><br />
                            <input className="w-75 p-2" placeholder="Trip Cost"{...register("expense", { required: true })} /> <br />
                        </Col>
                        <Col>
                            <label className="" for="email">Your Email</label><br />
                            <input className="w-75 p-2" name="email" defaultValue={user.email} {...register("email", { required: true })} />

                            {errors.email && <span className="text-danger">Please Enter Your Email</span>}
                            <br />

                            <label className="" for="contact">Contact No.</label><br />
                            <input className="w-75 p-2" placeholder="+8801XXXXXXX"{...register("contact", { required: true })} /> <br />


                            <label className="" for="date">Trip Date</label><br />
                            <input className="w-75 p-2" type="date" placeholder="Trip Departure Date"{...register("date", { required: true })} /> <br />


                            <label className="" for="expense">Trip Cost</label><br />
                            <input className="w-75 p-2" placeholder="Trip Cost"{...register("expense", { required: true })} /> <br /><br />
                        </Col>
                    </Row>
                    <textarea className="w-75 d-block m-auto" placeholder="Any other suggestions for us?"{...register("comment", { required: true })} />

                    <div className="col-md-6 text-start">
                        <label className="form-label fs-3 fw-bold mt-3">Rating</label>
                        <span
                            {...getStarWrapperProps({
                                style: {
                                    cursor: 'pointer',
                                    display: 'inline-block'
                                },
                            })}
                        >
                            {stars?.map((star, i) => (
                                <span
                                    key={i}
                                    {...getStarProps(i, {
                                        style: {
                                            fontSize: '40px',
                                            display: 'inline-block'
                                        },
                                        onClick: (event, ratedValue) => {
                                            setValue("rating", ratedValue, {
                                                shouldValidate: true,
                                                shouldDirty: true
                                            })
                                        },
                                    })}
                                >
                                    {star}
                                </span>
                            ))}
                        </span>
                    </div>

                    {/* submit button */}
                    <input className="" type="submit" value="Submit" />

                    <NavLink to="/home" className="" > See all Blogs</NavLink>

                </Form>
            </Container >

        </div >
    );
};

export default WriteBlog;