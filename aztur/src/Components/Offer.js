import React from 'react'

function Offer({offer}) {
    return (
        <div className='offer'>
            <div className={`${offer.special}`}>
                <p>Xüsusi təklif</p>
            </div>
            <img src={offer.img}></img>
            <div className='info-offer'>
                <h4>{offer.name}</h4>
                <p>${offer.price}</p>
            </div>
        </div>
    )
}

export default Offer