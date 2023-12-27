import React from 'react'
import Services from '../Components/Services'
import Layout from './Layout'
import '../css/services.css'

function Xidmetler() {
    const services = [
        {
            id: 1,
            name: 'HOTELLƏR',
            img: 'Frame1.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 10.png'
        },
        {
            id: 2,
            name: 'AVİABİLETLƏR',
            img: 'Frame2.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 3,
            name: 'UÇUŞLAR',
            img: 'Frame3.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 4,
            name: 'XARİCİ VƏ DAXİLİ TURLAR',
            img: 'Frame4.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 5,
            name: 'RENT A CAR',
            img: 'Frame5.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 6,
            name: 'SƏYAHƏT',
            img: 'Frame6.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 7,
            name: 'GRUP TURLAR',
            img: 'Frame7.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        },
        {
            id: 8,
            name: 'SIĞORTA',
            img: 'Frame8.png',
            info : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry…',
            picture1: 'image 9.png',
            picture2: 'image 10.png',
            picture3: 'image 11.png',
            picture4: 'image 12.png'
        }
    ]
    return (
        <>
            <Layout>
                <section className='section-services row'>
                    {
                        services.map(x => {
                            return <Services xidmet={x} key={x.id} />
                        })
                    }
                </section>
            </Layout>
        </>
    )
}

export default Xidmetler