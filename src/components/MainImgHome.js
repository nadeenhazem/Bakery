import React from 'react';
import "@fontsource/caveat";
import { Link } from 'react-router-dom';

function MainImgHome(props) {
    return (
        <div className={props.ClassName} id='Home-img'>
                        <img src={props.img} className="d-block w-100" alt="..." />
                        <h1 className='home-Header' style={{fontFamily:'Caveat'}}>{props.title}</h1>
                        <div className="carousel-caption d-none d-md-block" id='Home-btn-dev'>
                        <Link to={'/MadeBakery'}>
                          <button className='Home-btn' name='Discover'>Discover</button>
                          </Link>
                          <Link to={'/shop'}>
                          <button className='Home-btn'name='Shop Now'>Shop Now</button></Link>

                        </div>
                      </div>
    );
}

export default MainImgHome;