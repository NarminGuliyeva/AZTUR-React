import React from 'react'
import { Link } from 'react-router-dom'

function Services({ xidmet }) {
    return (
        <div className='part-services col-sm-3'>
            <Link to='/service' state={{service: xidmet}}>
                <div className='img-services'>
                    <img src={`img/${xidmet.img}`} ></img>
                </div>
            </Link>
            <h3>{xidmet.name}</h3>
            <p>{xidmet.info}</p>
        </div>
    )
}

export default Services