import React from 'react'
import { useLocation } from "react-router-dom";

function Whyus() {
    const location = useLocation();
    return (
        <section className={`${location.pathname === '/' ? 'home-whyus' : 'about-whyus'}`} id='whyUs'>
            <div class="part-whyus info-whyus">
                <div class="title">
                    <h3>NİYƏ BİZ?</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolar sit amet</p>
                </div>
                <div class="txt-whyus">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='info'>
                        <div className='alt-info'>
                            <img src='../img/Frame.png'></img>
                            <div>
                                <h5>325</h5>
                                <p>Turlar</p>
                            </div>
                        </div>
                        <div className='alt-info'>
                            <img src='../img/Frame (1).png'></img>
                            <div>
                                <h5>847</h5>
                                <p>Hotel</p>
                            </div>
                        </div>
                        <div className='alt-info'>
                            <img src='../img/Frame (2).png'></img>
                            <div>
                                <h5>436</h5>
                                <p>Uçuş</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part-whyus video-whyus">
                <div className='whyus-img'>
                    <img className='vector-img' src="../img/Vector.png" alt=""></img>
                    <img className='main-img' src="../img/tom-barrett-M0AWNxnLaMw-unsplash 1.png" alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default Whyus