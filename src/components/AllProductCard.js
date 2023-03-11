import React from 'react';
import '../Stylling/Shop.css';
import { useNavigate } from 'react-router-dom';
function AllProductCard(props) {
    const Navigate = useNavigate();
    const PageOnecake = (data) => {
        Navigate('/oneitem',
            {
                state: data
            })
    }
    return (
        <div className="col-md-4 col-lg-4  d-md-block"style={{marginBottom:'5%'}} >
            <div className="card" id='shop-card' >
                {props.Data.offer.length === 0 ? null : <div className="top-right">{props.Data.offer}</div>}

                <img src={props.Data.img} alt="login form" className="img-fluid"
                    id='shop-card-img'
                    onClick={() => { PageOnecake(props.Data) }} />



                <p className='shop-card-name'>{props.Data.name}</p>
                <p className='shop-card-price'>${props.Data.price}</p>
            </div>
        </div>
    );
}

export default AllProductCard;