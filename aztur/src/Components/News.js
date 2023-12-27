import React from 'react'
import { Link } from 'react-router-dom'

function News({ newsData }) {
    return (
        <div className='news col-md-3'>
            <img src={`/img/${newsData.img}`} className='img-news'></img>
            <h2>{newsData.name}</h2>
            <div className='txt-news'>
                <div className='txt'>
                    <p>{newsData.info}</p>
                </div>
                <div className='more-date'>
                    <button>
                        <Link to={`/news/${encodeURIComponent(newsData.name.toLocaleLowerCase())}`} state={{ news: newsData }} className='link'>Ətraflı <i class="fa-solid fa-angle-right"></i></Link>
                    </button>
                    <div className='date-news'>
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>{newsData.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News