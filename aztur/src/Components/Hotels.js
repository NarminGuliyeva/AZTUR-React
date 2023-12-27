import React from 'react'
import Hotel from './Hotel'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hotelsData from '../data/Hotels';

SwiperCore.use([Autoplay]);
function Hotels() {

    return (
        <section className='section-hotels-home'>
            <div class="title">
                <h3>HOTELLƏR</h3>
                <hr></hr>
                <p>Lorem ipsum dolar sit amet</p>
            </div>
            <div className='hotels-home hotels row'>
            <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
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
                            slidesPerView :2,
                        },
                        768: {
                            slidesPerView :3,
                        },
                        1024: {
                            slidesPerView :4,
                        }
                    }}
                    className="mySwiper"
                >
                    {
                        hotelsData.map(item=>{
                            return <SwiperSlide><Hotel hoteller={item} key={item.id} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Hotels