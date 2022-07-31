import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import plane from '../../imgage/Vector.png';

import cir1 from '../../imgage/Ellipse 1.png';
import cir4 from '../../imgage/Ellipse 4.png';
import cir2 from '../../imgage/Ellipse 2.png';
import cir3 from '../../imgage/Ellipse 3.png';



import ball1 from '../../imgage/Ellipse 7.png';
import ball2 from '../../imgage/Ellipse 9.png';
import ball3 from '../../imgage/Ellipse 10.png';
import ball4 from '../../imgage/Ellipse 11.png';
import ball5 from '../../imgage/Ellipse 6.png';
import ball6 from '../../imgage/Ellipse 8.png';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='moving-left '>


                <div >
                    <img src={plane} alt="" />
                
                </div>


            </div>


            <div style={{ margin: '10px' }}>


                <div>

                    <h1 className='txt-h'>Welcome to<br /><span style={{ color: 'hsla(72, 88%, 77%, 1)' }}>Globetech </span> </h1>

                </div>


                <div className='txt-p'>
                    <p >We are  committed to deliver <span style={{ color: "hsla(72, 48%, 48%, 1)" }}>best IT services.</span> Our<br /> Consultants have  experience  in  working with value <br /> clients. We have extensive experience in  software <br />application space and also offer a  broad range and <br />depth of technology.</p>
                </div>


                <div style={{ display: 'flex' }}>

                    <Button className='boton1' style={{ backgroundColor: "hsla(72, 88%, 73%, 1)", marginLeft: '50px', color: ' #00052F', fontSize: "26px", Weight: "700", fontFamily: "Poppins" }}>Support Us</Button>{' '}
                    <Button className='boton1' style={{ backgroundColor: '#1E1E1E', marginLeft: '45px', color: '#8FE5FF', fontSize: "26px", Weight: "700", fontFamily: "Poppins" }}>Our Mission</Button>{' '}
                </div>


            </div>


            <div>

                <img  className='round1' src={cir1} alt="" />
                <img  className='round2' src={cir2} alt="" />
                <img  className='round3' src={cir3} alt="" />
                <img  className='round4' src={cir4} alt="" />

                <img  className='ball1' src={ball1} alt="" />
                <img  className='ball2' src={ball2} alt="" />
                <img  className='ball3' src={ball3} alt="" />
                <img  className='ball4' src={ball4} alt="" />
                <img  className='ball5' src={ball5} alt="" />
                <img  className='ball6' src={ball6} alt="" />


            

            </div>

        </div >
    );
};

export default Home;