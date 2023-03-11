import { React,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import '../Stylling/BuyItems.css'
import { useNavigate } from 'react-router-dom';
function RelatedProduct(props) {
    const PageName='Products';
    const mainItem=props.data.id
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const relatedProducts = useSelector(state => state.fetchAllData);
    useEffect(() => {
        dispatch(fetchData(PageName))
    }, [dispatch])
    const PageOnecake = (data) => {
        Navigate('/oneitem',
            {
                state: data
            })
            }

    return (
        <>
          <div className="row g-0" id='row-product'>
                                <div className="col-md-12 col-lg-12  d-md-block">
                                    <h1 className='header-product'>RELATED PRODUCT</h1>
                                </div>
                                 {
                                relatedProducts.data.slice()
                                .reverse().map((rel) =>
                                rel.id===mainItem?null:
                                    <div className="col-md-3 col-lg-3  d-md-block" key={rel.id} >

                                        <div className='card' id='rel-product-card'
                                        onClick={() => { PageOnecake(rel) }}>
                                            <img src={rel.img} className='rel-product-img' alt='img' />

                                            <p>{rel.name}</p>
                                            <p style={{ color: ' #BC1D34' }}>${rel.price}</p>
                                        </div>

                                    </div>
                                    )
                                } 
                                



                            </div>
        </>
    );
}

export default RelatedProduct;