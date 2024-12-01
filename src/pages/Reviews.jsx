import React from 'react'
import Header from '../components/Header'
import Viewreview from '../components/review/Viewreview'
import Footer from '../components/Footer'
import Addreview from '../components/review/Addreview'

function Reviews() {
  return (
    <>
        <div>
          <div>
            <Header/>
          </div>
          <div>
            <Addreview/>
          </div>
          <div>
         <Viewreview/>
          </div>
          <div>
            <Footer/>
          </div>
          
        </div>
    </>
  )
}

export default Reviews