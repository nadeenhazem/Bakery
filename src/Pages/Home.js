import React from 'react';
import Collection from '../components/Collection';
import MainImgHome from '../components/MainImgHome';
import '../Stylling/Home.css';
import{IoIosArrowForward,IoIosArrowBack} from "react-icons/io";
function Home(props) {
  return (
    <>
    <div className="container" >
      <div style={{ width: '100%' }}>
        <div className="col-md-12 col-lg-12">
          <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">

            <div className="carousel-indicators d-none" >
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselBasicExample"
                data-mdb-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <MainImgHome ClassName='carousel-item active' img='https://i.ibb.co/v19JY9W/img1.jpg' title='Patisserie'/>
              <MainImgHome ClassName='carousel-item' img='https://i.ibb.co/X4jPrg3/10.jpg' />
              <MainImgHome ClassName='carousel-item' img='https://i.ibb.co/j8TdGSC/7.jpg' />
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="prev"
            >
              <span  aria-hidden="true">
                <IoIosArrowBack className="Home-Arrow"/></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide="next"
            >
              <span  aria-hidden="true">
              <IoIosArrowForward className="Home-Arrow"/>
              </span>
              <span className="visually-hidden">Next</span>
            </button>
            
          </div>
        </div></div>
       </div>
       <Collection/>
</>

  );
}

export default Home;