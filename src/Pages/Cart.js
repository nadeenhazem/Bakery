import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import { MdOutlineDelete } from 'react-icons/md';
import { DeleteData } from '../Redux/Slice/ChangeDataSlice';
import Alert from 'react-bootstrap/Alert';
function Cart(props) {
  const PageName = 'Cart';
  const dispatch = useDispatch();
  const Cart = useSelector(state => state.fetchAllData);
  useEffect(() => {
    dispatch(fetchData(PageName));

  }, [dispatch])
  let sum = 0

  const DeleteFromCart = (data) => {
    dispatch(DeleteData(data));
    
    setInterval(() => {
      
      window.location.reload();
    }, 1000);

  }
  const [show, setShow] = useState(false)
  const buyDone = () => {
    setShow(true)
    setInterval(() => {
      setShow(false);
    }, 3000);

  }

  return (

    Cart.data.length === 0 || Cart.data === null ?
      <h1>Cart is empty</h1> :
      <section className='cart-section' >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <p><span className="h2">Shopping Cart </span><span className="h4">({Cart.data.length} item in your cart)</span></p>
              {

                Cart.data.map((item) =>



                  <div className="card mb-4" key={item.id}>
                    <div className="card-body p-4">

                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img src={item.img}
                            className="img-fluid" alt=".." />
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Name</p>
                            <p className="lead fw-normal mb-0">{item.name}</p>
                          </div>
                        </div>

                        <div className="col-md-2 d-flex justify-content-center" style={{ textAlign: 'center' }}>
                          <div>
                            <p className="small text-muted mb-4 pb-2">Quantity</p>
                            <p className="lead fw-normal mb-0"> {item.quantity}</p>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Price</p>
                            <p className="lead fw-normal mb-0">${item.price}</p>
                          </div>
                        </div>
                        <div className="col-md-3 d-flex justify-content-center">
                          <div>
                            <p className="small text-muted mb-4 pb-2">Total</p>
                            <p className="lead fw-normal mb-0">${item.totalprice}</p>

                            <p style={{ display: 'none' }}>{sum += item.totalprice}</p>

                          </div>
                        </div>
                        <div className="col-md-12 d-flex " style={{ justifyContent: 'right' }}>
                          <div>
                            <p className="small text-muted mb-4 pb-2"></p>
                            <p className="lead fw-normal mb-0">
                              <MdOutlineDelete className='icon-delete' onClick={() => DeleteFromCart(item)} /></p>
                          </div>
                          
                        </div>
                      </div>
                      
                    </div>
                  </div>




                )}

              <div className="card mb-5" >
                <div className="card-body p-4" >

                  <div className="float-end" style={{ marginRight: '5%' }}>
                    <p className="mb-1 me-5 d-flex align-items-center" >
                      <span className="small text-muted me-2">Order total:</span> <span
                        className="lead fw-normal">${sum}</span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary btn-rounded btn-lg"
                  onClick={buyDone}>Buy Now</button>
              </div>

            </div>
          </div>
          <div className='buyDone'>
            {show && <Alert variant='success'>
              Purchased successfully
            </Alert>}
          </div>

        </div>


      </section >
  );
}

export default Cart;