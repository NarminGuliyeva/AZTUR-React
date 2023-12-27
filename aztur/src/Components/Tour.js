import React from 'react'
import { Link } from 'react-router-dom'

function Tour({ tur }) {
    return (
        <>
            <Link to={`/tours/${encodeURIComponent(tur.title.toLocaleLowerCase())}`} state={{ tour: tur }} className='link'>
                <div className="tour">
                    <div className='img-tour part-tur'>
                        <div className='big-img'>
                            <img src={`/img/${tur.img}`}></img>
                        </div>  
                    </div>
                    <div className='details-tour part-tur'>
                        <div className="txt-tour">
                            <h4>{tur.title}</h4>
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p>{tur.info}</p>
                        </div>
                        <div className='price-tour'>
                            <h4>${tur.price}</h4>
                            <p>/nəfər</p>
                            <button className='button'><Link className='link'>Turu al</Link></button>
                        </div>
                        <div className="info-tour">
                            <div className="date-tour part-tour">
                                <img src="/img/Group_607_1_.png" alt=""></img>
                                <p>{tur.day}gün</p>
                            </div>
                            <div className="person-tour part-tour">
                                <img src="/img/Group_608_1_.png" alt=""></img>
                                <p>{tur.person}+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Tour