import React from 'react'
// import '../css/tours.css'
import Tour from './Tour'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import tourData from '../data/Tour';

SwiperCore.use([Autoplay]);
function Tours() {
    return (
        <section className="section-tours">
            <div className="title">
                <h3>POPULAR TURLAR</h3>
                <hr></hr>
                <p>Lorem ipsum dolar sit amet</p>
            </div>
            <div className="tours">
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
                        480: {
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
                        tourData.map(item => {
                            return <SwiperSlide><Tour tur={item} key={item.id} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Tours