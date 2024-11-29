import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Card1 from '../components/cards/Card1'
import Card3 from '../components/cards/Card3'
import Footer from '../components/Footer'
import Card4 from '../components/cards/Card4'

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
            name: "Go toMap",
            icon: (
              <i
                class="fa-solid fa-arrow-right-long fa-xl ml-3"
                style={{ color: "#000000" }}
              ></i>
            ),
          }}/>
        </div>
        <div>
        <Card4  datas={[{
              hotel: "keralaa hotel",
              state: "thamilnaaduu",
              link: "http//:cdcdcv.com",
              price: 4223,
              image: '/assets/images/image.jpg',
              raing: 5,
            },
            {
              hotel: "keralaa hotel",
              state: "kerala hotel",
              link: "http//:cdcdcv.com",
              price: 4223,
              image: '/assets/images/image.jpg',
              raing: 5,
            },
            {
              hotel: "keralaa hotel",
              state: "Kerala hotel",
              link: "http//:cdcdcv.com",
              price: 4223,
              image: '/assets/images/image.jpg',
              raing: 5,
            },
            {
              hotel: "Thaj hotel",
              state: "kerala",
              link: "http//:cdcdcv.com",
              price: 4223,
              image: '/assets/images/image.jpg',
              raing: 5,
            }]}/>
        </div>
        <div>
        <Card3 />
        </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Destinationdetail