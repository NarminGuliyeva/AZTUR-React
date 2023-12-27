import React, { useEffect, useState } from 'react'
import { Outlet, Link, useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import menuData from '../data/Menu';
import tourData from '../data/Tour';
import newsData from '../data/News';


function Header() {
    const location = useLocation();
    const {tourslug} = useParams();
    const {newsdetailsslug} = useParams();  
    const [pageTitle, setPageTitle] = useState();
    useEffect(() => {
        const currentPage = menuData.find((data) => data.url === location.pathname);
        const currentTour = tourData.find((data) => data.title.toLocaleLowerCase() === decodeURIComponent(tourslug))
        const currentNews = newsData.find((data) => data.name.toLocaleLowerCase() === decodeURIComponent(newsdetailsslug))
        if(currentPage){
            setPageTitle(currentPage.name)
        }else{
            if(currentTour){
                setPageTitle(currentTour.title)
            }
            else {
                setPageTitle(currentNews.name)
            }
        }
    },[location])
    return (
        <header className={`${location.pathname === '/' ? 'home' : 'page'}`}>
            <Swiper
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='/img/azhar-j-t2hgHV1R7_g-unsplash 1.png'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/azhar-j-t2hgHV1R7_g-unsplash 1.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/azhar-j-t2hgHV1R7_g-unsplash 1.png"></img>
                </SwiperSlide>
            </Swiper>
            <div class="top-header m-auto space-between">
                <div class="logo">
                    <Link to="/">
                        <img src="/img/aztur logo 1080 ağ 1.png" alt=""></img>
                    </Link>
                </div>
                <div className='menu'>
                    <div class="icon">
                        <div class="icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                        <div class="lang">
                            <button>AZ<i class="fa-solid fa-angle-down"></i></button>
                        </div>
                        <div class="search-button">
                            <input type="search" name="" id="" placeholder="Axtar"></input>
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                        </div>
                    </div>
                    <hr></hr>
                    <nav class="navbar navbar-expand-sm menu">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                            {
                                menuData.map(item => (
                                    <li key={item.id}>
                                        <Link to={`${item.url}`} class="nav-link">{item.name}</Link>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </nav>
                    <Outlet />
                </div>
            </div>
            <div className='name-page'>
                <h2>
                    {pageTitle}
                </h2>
            </div>
            <div class="bottom-header">
                <div class="part-search">
                    <div class="txt-search">
                        <p>Istiqamət:</p>
                    </div>
                    <div class="inp-search left-inp-search">
                        <img src="/img/Group_6_1_.png" alt=""></img>
                        <input type="text" name="" id="" placeholder="Hara"></input>
                    </div>
                </div>
                <div class="part-search">
                    <div class="txt-search">
                        <p>Tarixdən:</p>
                    </div>
                    <div class="inp-search">
                        <img src="/img/Group_39-2_1_.png" alt=""></img>
                        <input type="date" name="" id=""></input>
                    </div>
                </div>
                <div class="part-search">
                    <div class="txt-search">
                        <p>Tarixə:</p>
                    </div>
                    <div class="inp-search">
                        <img src="/img/Group_39-2_1_.png" alt=""></img>
                        <input type="date" name="" id=""></input>
                    </div>
                </div>
                <div class="part-search">
                    <div class="txt-search">
                        <p>Nəfər:</p>
                    </div>
                    <div class="inp-search">
                        <img src="/img/Group_63_1_.png" alt=""></img>
                        <input type="text" name="" id="" placeholder="Nəfər"></input>
                    </div>
                </div>
                <div class="part-search">
                    <div class="txt-search"></div>
                    <div class="inp-search right-inp-search">
                        <button>AXTAR</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header