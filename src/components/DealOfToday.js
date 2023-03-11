import React from 'react';
import Counter from './Counter';
function DealOfToday(props) {
    return (
        <section >
            <div className="container">
                <img src="https://i.ibb.co/b6dLQjt/1.jpg" alt="..." style={{ width: '100%' }} />
                <div className="text-block">
                    <h3 className='Shop-Deal-p'>Deal Of Today</h3>
                    <h1 className='Shop-Deal-h1'>Tasty Cupcake with<br />Strawberry Cream</h1>
                    <h4>ONLY:$16.00</h4>
                    <Counter />
                    <button className='Shop-btn' >ORDER NOW</button>
                </div>
            </div>
          
                        
                     
        </section>
    );
}

export default DealOfToday;