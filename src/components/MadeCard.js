import React from 'react';

function MadeCard(props) {
    return (
        <div className='card'id='Made-card'>
        <img src={props.img}alt='...' />
        <h4>{props.header}</h4>
        <p >{props.text}</p>
    </div>
    );
}

export default MadeCard;