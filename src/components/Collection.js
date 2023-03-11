import React from 'react';
import CollectionCard from './CollectionCard';

function Collection(props) {
    return (
        <section >
        <div className="container py-5 h-100" >
            <div className="row d-flex justify-content-center align-items-center h-100" >
                <div className="col col-xl-10 " style={{ width: '100%', textAlign: 'center',marginTop:'5%' }}>
                    <div className="card" style={{borderStyle:'none'}}>
                        <div className="row g-0">
                            <div className="col-md-3 col-lg-3 d-md-block" id='Collection-col'>
                                <p className='collection-p'>See Collection</p>
                                <h1>Our Fine Home- Made Chocolate</h1>
                                <p className='collection-p2'>
                                    Authoritires in our bussiness will tell in on
                                    uncertain terms that lorem is forever
                                    fasttlee huge ,forever
                                </p>
                                </div>
                                <CollectionCard img='https://i.ibb.co/fY5Fs6g/12.jpg' header='CupCakes'
                                text='there are some of amazing cakes with chocolate sauce'/>
                                
                                <CollectionCard img='https://i.ibb.co/M26mGss/13.jpg' header='Macaroons'
                                text='this is the most  beautiful macaroonse in the world'/>
                                <CollectionCard img='https://i.ibb.co/4Yb6yt2/11.jpg' header='Cakes'
                                text='Quisque posuere dui at magna finibus, vel maximus massa vehicula. Nulla suscipit sapien et malesuada tincidunt.'/>
                                
                                </div></div>
                                </div></div></div></section>
            
        
    );
}

export default Collection;