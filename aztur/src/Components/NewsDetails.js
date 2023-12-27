import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NewsDetails() {
    const location = useLocation();
    const news = location.state.news;
    return (
        <div className='news'>
            <div className='news-img'>
                <img src={`/img/${news.img}`}></img>
            </div>
            <h2>{news.name}</h2>
            <div className='txt-news'>
                <div className='txt'>
                    <p>{news.info}</p>
                </div>
                <div className='more-date'>
                    <div className='date-news'>
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>{news.date}</p>
                    </div>
                    <div className='views'>
                        <i class="fa-solid fa-eye"></i>
                        <p>{news.views} görüntüləmə</p>
                    </div>
                </div>
            </div>
            <div className='icons-news'>
                <Link to='/' className='link'>
                    <img src='/img/whatsapp 1.png'></img>
                </Link>
                <Link to='/' className='link'>
                    <img src='/img/instagram 1.png'></img>
                </Link>
            </div>
        </div>
    )
}

export default NewsDetails