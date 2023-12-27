import React from 'react'
import Offer from './Offer'

function Special_offer() {
    const offers = [
        {
            id : 1,
            name : 'DAĞCILIQ',
            img : 'img/sylvain-mauroux-m6wbWMF6p9s-unsplash 1.png',
            price : 34,
            special : 'none'
        },
        {
            id : 2,
            name : 'KAYIK',
            img : './img/pietro-de-grandi-6U4wogjLArk-unsplash 1.png',
            price : 30,
            special : 's-offer'
        },
        {
            id : 3,
            name : 'YAXTA',
            img : 'img/hassan-nizam-Y3Hbh7wB8CI-unsplash 1.png',
            price : 42,
            special : 'none'
        },
        {
            id : 4,
            name : 'XİZƏK',
            img : 'img/matthieu-petiard-Pf6e3o0GL4M-unsplash 1.png',
            price : 22,
            special : 's-offer'
        },
    ]
    return (
        <section className='special-offers'>
            <div class="title">
                <h3>XÜSUSİ TƏKLİFLƏR</h3>
                <hr></hr>
                <p>Lorem ipsum dolar sit amet</p>
            </div>
            <div className='offers'>
                {
                    offers.map(o=> {
                        return <Offer offer={o} key={o.id}/>
                    })
                }
            </div>
        </section>
    )
}

export default Special_offer