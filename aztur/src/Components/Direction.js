import React from 'react'

function Direction() {
    return (
        <>
            <div className='special-offer'>
                <div className='percentage'>
                    <h4>25%</h4>
                </div>
                <div className='txt-offer'>
                    <h3>Xüsusi təklif!</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting...</p>
                    <button>Ətraflı</button>
                </div>
            </div>
            <section className='section-direction'>
                <div class="title">
                    <h3>İSTİQAMƏTİNİ SEÇ</h3>
                    <hr></hr>
                    <p>Lorem ipsum dolar sit amet</p>
                </div>
                <div className='img-direction'>
                    <div className='tr-ing countries'>
                        <div className='turkiye country'>
                            <div className='degree-direction'>
                                <img src="/img/Frame 1.png"></img>
                                <p>+18°</p>
                            </div>
                            <div className='txt-direction'>
                                <h5>TÜRKİYE</h5>
                                <h4>İSTANBUL</h4>
                            </div>
                        </div>
                        <div className='ingiltere country'>
                            <div className='degree-direction'>
                                <img src="img/Frame 1.png"></img>
                                <p>+14°</p>
                            </div>
                            <div className='txt-direction'>
                                <h5>İNGİLTƏRƏ</h5>
                                <h4>LONDON</h4>
                            </div>
                        </div>
                    </div>
                    <div className='niderland country' id='country'>
                        <div className='degree-direction'>
                            <img src="img/Frame 1.png"></img>
                            <p>+22°</p>
                        </div>
                        <div className='txt-direction'>
                            <h5>NİDERLAND</h5>
                            <h4>AMSTERDAM</h4>
                        </div>
                    </div>
                    <div className='it-aus countries'>
                        <div className='italiya country'>
                            <div className='degree-direction'>
                                <img src="img/Frame 1.png"></img>
                                <p>+27°</p>
                            </div>
                            <div className='txt-direction'>
                                <h5>İTALİYA</h5>
                                <h4>MILAN</h4>
                            </div>
                        </div>
                        <div className='australiya country'>
                            <div className='degree-direction'>
                                <img src="img/Frame 1.png"></img>
                                <p>+35°</p>
                            </div>
                            <div className='txt-direction'>
                                <h5>AUSTRALİYA</h5>
                                <h4>SIDNEY</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Direction