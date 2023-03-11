import React from 'react';

function CollectionCard(props) {
    return (
        <div className="col-md-3 col-lg-3 d-md-block" >
        <img src={props.img} className='Collection-img' alt='...'/>
        <h3 className='Collection-h3'>{props.header}</h3>
        <p className='collection-p2'> {props.text}</p>
         </div>
    );
}

export default CollectionCard;