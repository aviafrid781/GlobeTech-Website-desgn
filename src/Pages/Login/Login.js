import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import btn from '../../imgage/Vector 1.png'
import './Login.css'
const Login = () => {
    return (


        <Row>

            <Col xs={6} md={5}>
                <h1 className='log-h1'>Globetech<br /> Company Limited</h1>
                <p className='log-p' >Make yourself digitalized & more effecient</p>
                <Nav.Link as={Link} to="home" > <img className='btn-img1' src={btn} alt="" /></Nav.Link>



            </Col>



            <Col xs={12} md={10}>

                <div className='log-contrainer'>

                    <div className='log-form'>

                        <h1 style={{ color: 'hsla(0, 0%, 13%, 1)' }}>Welcome</h1>
                        <p>Sign in to your account</p>
                        <Form>
                            <div style={{ margin: 20 }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control className='btn-text' type="email" placeholder="Email" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Control className='btn-text' type="password" placeholder="Password" />
                                </Form.Group>

                            </div>

                            <Button className='log-btn' type="submit">
                                Login
                            </Button>
                        </Form>


                    </div>




                </div>



            </Col>


        </Row >



    );
};

export default Login;