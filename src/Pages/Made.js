import React from 'react';
import MadeCard from '../components/MadeCard';
import '../Stylling/Made.css'
function Made(props) {
    return (
        <section >
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-10 " style={{ width: '100%', textAlign: 'center'}}>
                        <div className="card" style={{ borderStyle: 'none',color:'#BC1D34' }}>
                            <div className="row g-0">
                            <div className="col-md-12 col-lg-12 d-md-block" >
                            <p className='Made-Header-p'>We Love What We Do</p>
                                    <h1> How We Made Donuts</h1>

                               </div>
                                <div className="col-md-3 col-lg-3 d-md-block" >
                                   
                                    <MadeCard img='https://i.ibb.co/Jms9f5b/14.jpg' header='1-Intredients' text="Chance are there wasen't collaboration,communication"/>
                                    <MadeCard img='https://i.ibb.co/GCLgcSr/16.jpg' header='2-Stuffing' text="There wasen't Process agreed upon or spacific with"/>
                                </div>

                                
                                <div className="col-md-6 col-lg-6 d-md-block" >
                                    <img src='https://i.ibb.co/qMr5XjQ/23.png' alt='...'className='Made-main-img1'/>
                                </div>



                                <div className="col-md-3 col-lg-3 d-md-block" >
                                <MadeCard img='https://i.ibb.co/CzWSYSj/15.jpg' header='3-Cooking' text="But that's not all that it takes to get things back on track "/>
                                    <MadeCard img='https://i.ibb.co/G9LckRy/17.jpg' header='4-Dish Ready ' text="the villagers are out there with a vengence  to get that "/>

                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </section>
    );
}

export default Made;