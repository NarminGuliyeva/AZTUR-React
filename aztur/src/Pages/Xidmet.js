import React from 'react'
import Layout from './Layout'
import { useLocation } from 'react-router-dom'

function Xidmet() {
    const location = useLocation();
    const service = location.state.service;
    return (
        <Layout>
            <div className='service'>
                <div className='img-services'>
                    <img src={`img/${service.img}`}></img>
                </div>
                <h3>{service.name}</h3>
                <p>{service.info}</p>
                {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p> */}
                <div className='pictures-service'>
                    <img src={`img/${service.picture1}`}></img>
                    <img src={`img/${service.picture2}`}></img>
                    <img src={`img/${service.picture3}`}></img>
                    <img src={`img/${service.picture4}`}></img>
                </div>
            </div>
        </Layout>
    )
}

export default Xidmet