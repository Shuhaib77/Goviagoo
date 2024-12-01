import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Stay from '../components/home/Stay'
import Footer from '../components/Footer'

function Foodspot() {
  return (
    <>
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Banner image={'assets/images/Food.avif'}/>
      </div>
      <div>
        <Stay button={"Book"}/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
        
    </>
  )
}

export default Foodspot