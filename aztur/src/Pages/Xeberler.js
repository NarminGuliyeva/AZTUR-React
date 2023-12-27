import React from 'react'
import Layout from './Layout'
import News from '../Components/News'
import '../css/news.css'
import newsData from '../data/News'

function Xeberler() {
  return (
    <Layout>
        <section className='section-news row s-news'>
          {
            newsData.map(item=> (
              <News newsData={item} key={item.id}/>
            ))
          }
        </section>
    </Layout>
  )
}

export default Xeberler