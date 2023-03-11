import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import AllProductCard from '../components/AllProductCard';
import Spinner from 'react-bootstrap/Spinner';

function Offers(props) {
    const PageName='Products';
    const dispatch = useDispatch();
    const AllProducts = useSelector(state => state.fetchAllData);
    useEffect(() => {
        dispatch(fetchData(PageName))
    }, [dispatch])
    return (
        <>
        {AllProducts.data.length === 0 || AllProducts.data === null ?
          <Spinner animation="border" className='spinner'/>:
            <section >
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-10 " style={{ width: '100%', textAlign: 'center'}}>
                            <div className="card" style={{borderStyle:'none'}}>
                                <div className="row g-0" >
                                    <div className="col-md-12 col-lg-12 d-md-block" >
                                        <h1 className='shop-header'>All Offers</h1>
                                    </div>
                                    {
                                        
                                        AllProducts.data.map((item) =>
                                        item.offer.length === 0?null:
                                            <AllProductCard Data={item} key={item.id} />
                                        )
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            </>
    );
}

export default Offers;