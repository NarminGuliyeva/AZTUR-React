import React from 'react'
import { Link } from "react-router-dom";
import menuData from '../data/Menu';

function Footer({ }) {
    return (
        <footer>
            <div className='footer-container'>
                <div className='logo-footer'>
                    <img src='../img/aztur logo 1080 ağ 2.png'></img>
                    <div class="icons">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className='info-footer'>
                    <div className='menu-footer part-footer'>
                        <ul>
                            <li>Menyular</li>
                            {
                                menuData.map(item => (
                                    <li key={item.id}>
                                        <Link to={`/${item.url}`} className='link'>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='links-footer part-footer'>
                        <ul>
                            <li>Faydalı linklər</li>
                            <li><Link to="/" className='link'>Tez-tez soruşulanlar</Link></li>
                            <li><Link to="/" className='link'>Karyera</Link></li>
                            <li><Link to="/" className='link'>Xidmət şəbəkəsi</Link></li>
                        </ul>
                    </div>
                    <div className='faq-footer part-footer'>
                        <ul>
                            <li><Link to="/" className='link'>FAQ</Link></li>
                            <li><Link to="/" className='link'>Təhlükəsizlik</Link></li>
                            <li><Link to="/" className='link'>Şərtlər və qaydalar</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer'><p>Copyright</p></div>
        </footer>
    )
}

export default Footer