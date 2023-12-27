import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Layout from './Layout'

function Tur() {
  const location = useLocation();
  const tour = location.state.tour

  const [selectedImage, setSelectedImage]=useState(tour.img);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  }

  return (
    <Layout>
      <section className='tur'>
        <div className='container-tour'>
          <div className="tour">
            <div className='img-tour part-tur'>
              <div className='big-img'>
                <img src={`/img/${selectedImage}`}></img>
              </div>
              <div className='small-img'>
                <img src={`/img/${tour.picture1}`} onClick={() => handleImageClick(tour.picture1)}></img>
                <img src={`/img/${tour.picture2}`} onClick={() => handleImageClick(tour.picture2)}></img>
                <img src={`/img/${tour.picture3}`} onClick={() => handleImageClick(tour.picture3)}></img>
              </div>
            </div>
            <div className='details-tour part-tur'>
              <div className="txt-tour">
                <h4>{tour.title}</h4>
                <p>{tour.info}</p>
              </div>
              <div className='about-tour'>
                <h3>Bu turun unikallığı:
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Walking along the Banyan Lake and Cedar Lake in Guilin</li>
                    <li><i className="fa-solid fa-check"></i> Boat cruise on the picturesque Li River down to Yangshuo</li>
                    <li><i className="fa-solid fa-check"></i> Cycling around the countryside and attend a cooking class in Yangshuo</li>
                    <li><i className="fa-solid fa-check"></i> Great Wall of Mutianyu, the Great Wall with much less tourists</li>
                    <li><i className="fa-solid fa-check"></i> Great Wall of Mutianyu, the Great Wall with much less tourists</li>
                    <li><i className="fa-solid fa-check"></i> Great Wall of Mutianyu, the Great Wall with much less tourists</li>
                  </ul>
                </h3>
              </div>
              <div className='price-tour'>
                <h4>${tour.price}</h4>
                <button className='button'><Link className='link'>Turu al</Link></button>
              </div>
            </div>
          </div>
          <div id='details-tours'>
            <div className='group-btn'>
              <button className='button'><Link to='/Turlar' className='link'>Ümumi</Link></button>
              <button className='button'><Link to='/Turlar' className='link'>Servis</Link></button>
              <button className='button'><Link to='/Turlar' className='link'>Səyahətlər</Link></button>
              <button className='button'><Link to='/Turlar' className='link'>Əlavə</Link></button>
              <button className='button'><Link to='/Turlar' className='link'>Rəylər</Link></button>
            </div>
            <div className='txt-tour'>
              <p>Start at magical Gulin where boats travel through the many lakes here via connected rivers. On Shanhu Lake’s shore, twin pagodas, the Sun and Moon, light up the sky at night. Move on to ancient Xi’an. A visit to Xi’an is a journey into China’s long history. Xi’an served as the capital for 12 dynasties over 1,000 years. The world-famous Terracotta Army is located in Xi’an as well as many other historical sites you can visit.</p>
              <p>Whether you are looking for ancient history, urban wonders, picturesque landscapes, or cultural experiences, this trip will satisfy you. More and more world travelers are turning toward China. In this trip, you will visit the major cities and their highlights.</p>
              <p>Finish up with Beijing. The Chinese capital is well-known for its mixture of ancient culture and urban growth. The most famous attractions in Beijing include the Great Wall of China and the Forbidden City.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tur