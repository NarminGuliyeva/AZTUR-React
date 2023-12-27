import React from 'react'
import '../css/hotels.css'
import { useLocation } from 'react-router-dom'

function Hotel({ hoteller }) {
    const location = useLocation()
    return (
        <div className={`${location.pathname === '/hotels' ? 'col-sm-4' : ''} hotel`}>
            <div className='img-hotel'>
                <img src={`/img/${hoteller.img}`}></img>
            </div>
            <div className='txt-hotel'>
                <h3>${hoteller.price}/ gecə</h3>
                <h4>{hoteller.name}</h4>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h5>{hoteller.tour}</h5>
            </div>
        </div>
    )
}

export default Hotel