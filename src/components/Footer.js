import React from 'react';
import "../Stylling/NavBar&Footer.css";
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
function Footer(props) {
    const CRUMBS = ['About Us', `FAQ's`, 'Terms & Conditions', 'Privacy Policy', 'Careers', 'Delivery & Collection', 'Contact Us'];
    const Find = ['1 kingly Court', 'London', 'W1B5PW'];
    return (
        <section>
            <div className="container py-5 h-0" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 " >
                        <div  style={{ borderStyle: 'none', textAlign: 'center' }}>
                            <div className="row g-0" >
                                <div className="col-md-12 col-lg-12  d-md-block" >
                                    <img src='https://i.ibb.co/F3nd0rL/logo3.png' style={{ width: '20%' }} alt='footer-img' />
                                </div>

                                <hr className='footer-hr'/>

                                <div className="col-md-4 col-lg-4  d-md-block" >
                                    <p className='footer-title'>CRUMBS & DOILITS</p>
                                    {
                                        CRUMBS.map((item) =>
                                            <Link className='footer-Links' key={item}>{item}</Link>
                                        )
                                    }

                                </div>
                                <div className="col-md-4 col-lg-4  d-md-block" >
                                    <p className='footer-title'>FOLLOW US ON</p>
                                    <Link to='https://twitter.com/' target={'_blank'}>
                                        <img src='https://i.ibb.co/55TXK1d/twi.png' className='footer-follow-img' alt='twitter' /></Link>
                                    <Link to='https://www.instagram.com/' target={'_blank'}>
                                        <img src='https://i.ibb.co/gwXK3h5/insta.png' className='footer-follow-img' style={{ width: '7%' }} alt='instgram' /></Link>
                                    <Link to='https://www.facebook.com/' target={'_blank'}>
                                        <img src='https://i.ibb.co/41S9jmk/face.png' className='footer-follow-img' alt='facebook' /></Link>
                                    <br />
                                    <p className='footer-title'>OPENING TIMES</p>
                                    <p className='footer-Links'>MON-SAT:11AM-7PM</p>
                                    <p className='footer-Links'>Sunday:12PM-6PM</p>


                                </div>
                                <div className="col-md-4 col-lg-4  d-md-block" >
                                    <p className='footer-title'>Find Us</p>
                                    {
                                        Find.map((find) =>
                                            <p className='footer-Links' key={find}>{find}</p>
                                        )
                                    }

                                    <Link className='footer-Links'><SlLocationPin /> Find on Google map</Link>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Footer;