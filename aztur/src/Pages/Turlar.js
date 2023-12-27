import React from 'react'
import Tour from '../Components/Tour'
import '../css/tours.css'
import Layout from './Layout'
import tourData from '../data/Tour'

function Turlar() {

  const categories = [
    {
      id: 1,
      name: 'Populyar'
    },
    {
      id: 2,
      name: 'Daxili turlar'
    },
    {
      id: 3,
      name: 'Xarici turlar'
    },
    {
      id: 4,
      name: 'Kəşfiyyat'
    },
    {
      id: 5,
      name: 'Bal ayl turu'
    },
    {
      id: 6,
      name: 'Ov turu'
    },
    {
      id: 7,
      name: 'Bayram'
    },
    {
      id: 8,
      name: 'Tətil turu'
    }
  ]
  return (
    <Layout>
      <section className='s-tours w-84'>
        <div className='tours'>{
          tourData.map(item => {
            return <Tour tur={item} key={item.id} />
          })
        }
        </div>
        <div className='categories-tours'>
          <h2>Tur Kateqoriyaları</h2>
          <hr></hr>
          <div className='categories'>
          {
            categories.map(item => (
              <div className='checkbox' key={item.id}>
                <input type='checkbox' className='check'></input>
                <label>{item.name}</label>
              </div>
              )
            )
          }
          </div>
          <button className='button'>AXTAR</button>
        </div>
      </section>
    </Layout>
  )
}

export default Turlar