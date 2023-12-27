import React from 'react'
import '../css/about.css'
import Whyus from '../Components/Whyus'
import Video from '../Components/Video'
import About from '../Components/About'
import Layout from './Layout'

function Haqqimizda() {
  return (
    <>
      <Layout>
        <About />
        <Whyus />
        <Video />
        <section className='pictures-about'>
          <img src='../img/image 8.png'></img>
        </section>
      </Layout>
    </>
  )
}

export default Haqqimizda