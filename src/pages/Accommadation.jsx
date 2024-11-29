import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Card4 from "../components/cards/Card4";
import Card3 from "../components/cards/Card3";
import Footer from "../components/Footer";

function Accommadation() {
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Banner
            image={
              "https://www.kumarakomlakeresort.in/assets/images/articles/30/five-top-places-to-stay-in-kerala-1.jpg"
            }
          />
        </div>
        <div>
          <Card4
            datas={[{
              hotel: "Thaj hotel",
              state: "kerala",
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
            },
            {
              hotel: "Thaj hotel",
              state: "kerala",
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
            },
            {
              hotel: "Thaj hotel",
              state: "kerala",
              link: "http//:cdcdcv.com",
              price: 4223,
              image: '/assets/images/image.jpg',
              raing: 5,
            }]}
          />
          
        </div>
        <div>
        <Card3 />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Accommadation;
