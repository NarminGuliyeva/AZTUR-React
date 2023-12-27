import React from 'react'

function Ticket({ biletler }) {
    return (
        <div className='ticket'>
            <div className='details-ticket first-details-ticket'>
                <img src={biletler.img}></img>
                <div className='txt-ticket'>
                    <h3>{biletler.name}</h3>
                    <p>{biletler.details}</p>
                </div>
            </div>
            <div className='container-ticket'>
                <div className='details-ticket clock-details'>
                    <div className='txt-ticket'>
                        <h3>{biletler.time1}</h3>
                        <p>HKG T2</p>
                    </div>
                    <img src='/img/Frame 2.png'></img>
                    <div className='txt-ticket'>
                        <h3>{biletler.time2}</h3>
                        <p>HKG T2</p>
                    </div>
                </div>
                <div className='details-ticket last-details-ticket'>
                    <div className='txt-ticket'>
                        <p>{biletler.period}</p>
                        <p id='flight-detail'>Flight details </p>
                    </div>
                    <div className='txt-ticket'>
                        <h4>${biletler.price}</h4>
                        <button>Almaq</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket