import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from "../../../images/register.svg"

const Register = () => {
    // import functions from useFirebase hook
    const { getUserEmail, getUserPassword, handleRegistration, name, email, error, getUserName, saveUser, setUsers, setError, verifyEmail, setUserName } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';

    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col md={6} sm={12}>
                    <img src={img} alt="" className='img-fluid' />
                </Col>
                <Col md={6} sm={12}>
                    <div className='border mx-auto p-5 rounded shadow'>
                        <Form onSubmit={(e) => {
                            e.preventDefault();

                            handleRegistration()
                                .then((result) => {

                                    let user = result.user;

                                    user.email = email;
                                    user.displayName = name;

                                    setUsers(user)

                                    verifyEmail();
                                    setUserName();
                                    navigate(redirect);

                                    //save user to database
                                    saveUser(user.displayName, user.email, 'POST');
                                    alert("Registered Successfully")
                                })
                                .catch((error) => {
                                    setError(error.message)
                                })
                        }}>
                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupName">
                                <FontAwesomeIcon icon={faUser} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name"
                                    name='name'
                                    onBlur={getUserName}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
                                <FontAwesomeIcon icon={faEnvelope} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />

                                <Form.Control
                                    type="email"
                                    placeholder="Email ID"
                                    name='email'
                                    onBlur={getUserEmail}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupPassword">
                                <FontAwesomeIcon icon={faLock} className='fs-5 m-2' style={{ 'color': '#c13f22' }} />
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    onBlur={getUserPassword}
                                />
                            </Form.Group>

                            <Button type='submit' variant='none' className='w-100 text-white fw-bold fs-5 border-0'
                                style={{ 'background': 'linear-gradient(to right, #b92b27, #1565c0)' }}>
                                Sign Up
                            </Button>

                        </Form>

                        <p className='text-center'>Already have an Account? <NavLink to='/login'>[Sign in]</NavLink></p>

                    </div>
                </Col>
            </Row>

        </Container>

    );
};

export default Register;