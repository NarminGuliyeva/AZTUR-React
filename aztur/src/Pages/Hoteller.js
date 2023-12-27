import React from 'react'
import Layout from './Layout'
import Hotel from '../Components/Hotel'
import hotelsData from '../data/Hotels'

function Hoteller() {
 
  return (
    <Layout>
      <section className='hotels row' id='hotels'>
        {
          hotelsData.map(item => {
            return <Hotel hoteller={item} key={item.id} />
          })
        }
      </section>
    </Layout>
  )
}

export default Hoteller