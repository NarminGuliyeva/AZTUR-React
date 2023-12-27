import React from 'react'
import News from '../Components/News'
import Layout from './Layout'
import Xeberler from './Xeberler';
import NewsDetails from '../Components/NewsDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper/core';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import newsData from '../data/News'

SwiperCore.use([Autoplay]);
function Xeber() {
  return (
    <Layout>
      <section className='news-detail'>
        <NewsDetails />
      </section>
      <section className='other-news s-news'>
        <div className='title-news'>
          <h2>Digər xəbərlər</h2>
        </div>
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
            1200: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          {
            newsData.map(item => {
              return <SwiperSlide><News newsData={item} key={item.id} /></SwiperSlide>
            })
          }
        </Swiper>
      </section>
    </Layout>
  )
}

export default Xeber