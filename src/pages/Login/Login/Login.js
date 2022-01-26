import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import img2 from "../../../images/register.svg"

const Login = () => {

    const { signInUsingGoogle, handleResetPassword, saveUser, getUserEmail, getUserPassword, setUsers, setError, userLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location?.state?.from || '/home';

    //handle google sign in button
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                setUsers(user)

                navigate(redirect);
                //save user to database
                saveUser(user.displayName, user.email, 'PUT')
            })
            .catch((error) => {
                setError(error.message)
            })
    };

    //handle sign in using email and password
    const userLoginWithEmailPass = (e) => {
        e.preventDefault();
        userLogin()
            .then((result) => {
                setUsers(result.user)
                navigate(redirect);
            })
            .catch((err) => {
                setError(err.message)
            })
    };


    return (
        <div>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={6}>
                        <img src={img2} alt="" className='img-fluid' />
                    </Col>
                    <Col md={6}>

                        <div className='border w-100 mx-auto p-5 rounded shadow'>

                            <Form onSubmit={userLoginWithEmailPass}>

                                <Form.Group className="mb-3 d-flex align-items-center" controlId="formGroupEmail">
                                    <FontAwesomeIcon icon={faUser} className='fs-4 m-2' style={{ 'color': '#c13f22' }} />

                                    <Form.Control
                                        type="email"
                                        placeholder="Email ID"
                                        name='email'
                                        onBlur={getUserEmail}
                                    />

                                </Form.Group>

                                <Form.Group className="d-flex align-items-center" controlId="formGroupPassword">
                                    <FontAwesomeIcon icon={faLock} className='fs-4 m-2' style={{ 'color': '#c13f22' }} />
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        onBlur={getUserPassword}
                                    />
                                </Form.Group>
                                <Button className="link text-dark pe-5 fw-bolder border-0 ms-auto d-block bg-transparent text-decoration-underline"
                                    onClick={handleResetPassword}
                                >
                                    Forgot password?
                                </Button>

                                <Button type='submit' variant='none' className='w-75 ms-5 text-white fw-bold fs-5 border-0'
                                    style={{ 'background': 'linear-gradient(to right, #b92b27, #1565c0)' }}>
                                    Login
                                </Button>

                                <Button variant='none' title="Login With Google" onClick={handleGoogleLogIn}>
                                    <FontAwesomeIcon icon={faGoogle} className='fs-4 m-2' style={{ 'color': '#c13f22' }} />
                                </Button>
                            </Form>

                            <p className='text-center'>Don't have an Account? <NavLink to='/register'>[Sign up]</NavLink></p>

                        </div>
                    </Col>
                </Row>

            </Container>

        </div >
    );
};

export default Login;