import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import im1 from '../../imgage/software 1.png';
import im2 from '../../imgage/image 3.png';
import im3 from '../../imgage/image 4.png';
import im4 from '../../imgage/bulk 1.png';
import im5 from '../../imgage/image 5.png';
import im6 from '../../imgage/image 6.png';

import plane from '../../imgage/Vector.png';
import line from '../../imgage/Line 4 (1).png';
import line2 from '../../imgage/Line 4 -2.png';
import line3 from '../../imgage/line4-3.png';

import './Services.css'
const Services = () => {
    return (
        <div>
            <br />
            <div >

                <div className='movingLeft' >
                   
                    <img src={plane} alt="" />
                </div>


            </div>
            <br/>
            <div style={{ color: 'white' }}>
                <h1>SERVICES</h1>
                <h1>We provides services to our clients</h1>
            </div>

            <div style={{ display: 'flex', marginLeft: '100px' }}>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im1} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>Software Solution</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im2} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>E-Commerce Solution</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im3} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>ERP Solution</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',

                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: 'flex', marginLeft: '100px' }}>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im4} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>Bulk SMS Service</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im5} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>Graphic Design</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22rem', margin: '20px', borderRadius: '29px' }}>
                    <Card.Img variant="top" src={im6} />
                    <Card.Body>
                        <Card.Title style={{ color: '#2397CD' }}>Digital Marketing</Card.Title>
                        <Card.Text className="txt1">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </Card.Text>
                    </Card.Body>

                    <Card.Body>
                        <Button className='btn'> More</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Services;