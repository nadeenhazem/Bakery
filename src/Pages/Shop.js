import React from 'react';
import '../Stylling/Shop.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import AllProductCard from '../components/AllProductCard';
import DealOfToday from '../components/DealOfToday';
import Spinner from 'react-bootstrap/Spinner';

function Shop(props) {
    const PageName='Products';
    const dispatch = useDispatch();
    const AllProducts = useSelector(state => state.fetchAllData);
    useEffect(() => {
        dispatch(fetchData(PageName))
    }, [dispatch])
    return (
    <>
    <DealOfToday/>
        {AllProducts.data.length === 0 || AllProducts.data === null ? 
        <Spinner animation="border" className='spinner'/> :
            <section >
                <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-10 " style={{ width: '100%', textAlign: 'center',marginTop:'5%' }}>
                            <div className="card" style={{borderStyle:'none'}}>
                                <div className="row g-0">
                                    <div className="col-md-12 col-lg-12 d-md-block" >
                                        <h1 className='shop-header'>Featured Products</h1>
                                    </div>
                                    {
                                        
                                        AllProducts.data.map((item) =>
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

export default Shop;