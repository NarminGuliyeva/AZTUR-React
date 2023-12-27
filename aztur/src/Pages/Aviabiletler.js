import React from 'react'
import Ticket from '../Components/Ticket'
import Layout from './Layout'
import Planetickets from '../Components/Planetickets'
import '../css/tickets.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ticketsData from '../data/Tickets'

function Aviabiletler() {

    const ticket = [
        {
            id: 1,
            img: '/img/chris-curry-zSUVxflnLmg-unsplash 1.png',
            name: 'Lorem İpsum',
            info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using...'
        },
        {
            id: 2,
            img: '/img/alan-laiter-garza-o4x-UHUSXkE-unsplash 1.png',
            name: 'Lorem İpsum',
            info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using...'
        },
        {
            id: 3,
            img: '/img/saikrishna-saketh-yellapragada-FACBPhv_mrk-unsplash 1.png',
            name: 'Lorem İpsum',
            info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using...'
        },
        {
            id: 4,
            img: '/img/saikrishna-saketh-yellapragada-FACBPhv_mrk-unsplash 1.png',
            name: 'Lorem İpsum',
            info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using...'
        },
        {
            id: 5,
            img: '/img/saikrishna-saketh-yellapragada-FACBPhv_mrk-unsplash 1.png',
            name: 'Lorem İpsum',
            info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using...'
        }
    ]
    return (
        <Layout>
            <div className='tickets'>
                {
                    ticketsData.map(t => {
                        return <Ticket biletler={t} key={t.id} />
                    })
                }
            </div>
            <div className='aviabiletler'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={70}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        575: {
                            slidesPerView :1,
                        },
                        768: {
                            slidesPerView :2,
                        },
                        1024: {
                            slidesPerView :3,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        ticket.map(t => {
                            return <SwiperSlide><Planetickets planetickets={t} key={t.id} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </Layout>
    )
}

export default Aviabiletler