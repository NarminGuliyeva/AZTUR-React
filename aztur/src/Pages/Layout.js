import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Layout = ({ children }) => {
  
  return (
    <React.Fragment>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default Layout