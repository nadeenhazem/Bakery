import React, { useState, useEffect } from 'react'
function Counter(props) {
    const getDay = () => {
        const today = new Date();
        let oneday = today.getDate() + 1;
        oneday < 10 && (oneday = '0' + oneday);
        let month = today.getMonth() + 1;
        month < 10 && (month = '0' + month);
        const dateOfToday = today.getFullYear() + '-' + month + '-' + oneday;
        return dateOfToday
    }
    const calculateTimeLeft = () => {
        const todayDate = getDay();
        const difference = +new Date(`${todayDate}T00:00:00`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });
    const arr = [`${timeLeft.hours} :`, `${timeLeft.minutes}:`, timeLeft.seconds];
    const arrofP = ['HOURS', 'MINUS', 'SECS']
    return (

        <div className='card' id='shop-counter'>
            <div className="row g-0 d-none d-md-flex">
                {
                    arr.map((T) =>
                        <div className="col-md-4 col-lg-4 d-md-block" id='timer-T'  key={T}>
                            {T}
                        </div>
                    )
                }
                {
                    arrofP.map((P) =>
                        <div className="col-md-4 col-lg-4 d-md-block" id='Timer-P' key={P}>
                            {P}
                        </div>
                    )
                }
            </div>
        </div>

    );
}

export default Counter;