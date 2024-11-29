import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Stay from '../components/home/Stay'

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
        <Stay/>
      </div>
    </div>
        
    </>
  )
}

export default Foodspot