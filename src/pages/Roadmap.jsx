import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Card6 from '../components/cards/Card6'
import Footer from '../components/Footer'
import Mapview from '../components/Map/Mapview'

function Roadmap() {
  return (
    <>
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Banner image={"https://static.vecteezy.com/system/resources/thumbnails/031/412/577/small_2x/ai-generated-ai-generative-outdoor-nature-landsacpe-forest-tree-road-highway-path-landscape-background-graphic-art-photo.jpg"}/>
      </div>
      <div>
        <Card6/>
      </div>
      <div>
      <Mapview/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
        
    </>
  )
}

export default Roadmap