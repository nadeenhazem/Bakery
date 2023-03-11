import { useLocation } from 'react-router-dom';
import '../Stylling/BuyItems.css'
import { React, useState } from 'react';
import RelatedProduct from './RelatedProduct';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { AddNewData } from '../Redux/Slice/ChangeDataSlice';
function OneItem(props) {
    const dispatch = useDispatch();
    useSelector(state => state.changeData);
    const item = useLocation().state
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 50) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    const AddCart=(data,num)=>{
        
        data.quantity=num;
        data.totalprice=num*data.price
          dispatch(AddNewData(data))
         

    }

    return (
        item===null?<Spinner animation="border" className='spinner'/>:
        <section >
            <div className="container py-5 h-0" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10 " style={{ width: '100%', textAlign: 'center', borderStyle: 'none' }}>
                        <div className="card" style={{ borderStyle: 'none' }}>
                             <div className="row g-0" >
                                <div className="col-md-6 col-lg-6  d-md-block"   >
                                    <img src={item.img} alt='img' id='img-buy' />
                                </div>
                                <div className="col-md-6 col-lg6-  d-md-block" >
                                    <h1 className='header-shop'>{item.name}</h1>
                                    <p>{item.caption}</p>

                                    <div className="col-xl-2" style={{ display: 'inline-block' }}>
                                        <div className="input-group" id='main-dev-buy'>
                                            <button className="btn-buy" type="button" onClick={decNum}>-</button>
                                            <input type="text" className="form-control" id='input-buy' value={num} onChange={handleChange} />
                                            <button className="btn-buy" type="button" onClick={incNum}>+</button>

                                        </div>
                                    </div>
                                    <span className='price-buy'>Price:${num*item.price}</span>
                                    <br />
                                    <br />
                                    <Link to={"/cart"} className='addcart'>
                                    <button onClick={()=>AddCart(item,num)}> Add To Cart</button>
                                    </Link>
                                </div>

                                <RelatedProduct data={item}/>

                            </div> 
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OneItem;