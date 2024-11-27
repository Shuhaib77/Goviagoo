import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Card1 from '../components/Card1'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'

function Destinationdetail() {
  return (
    <>
        <div>
          <Header/>
        </div>
        <div>
          <Banner image={'assets/images/image.jpg'}/>
        </div>
        
        <div>
          <Card1 heading={"Explore destinattion"}
          paragraph={"Facilisi vulputate malesuada libero vitae fusce placerat dignissim blandit. "}
          icons={{
            name: "All Destinations",
            icon: (
              <i
                class="fa-solid fa-arrow-right-long fa-xl ml-3"
                style={{ color: "#000000" }}
              ></i>
            ),
          }}/>
        </div>
        <div>
        <Card4/>
        </div>
        <div>
        <Card3 />
        </div>

    </>
  )
}

export default Destinationdetail