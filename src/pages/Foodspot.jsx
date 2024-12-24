import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Stay from "../components/home/Stay";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Foodspot() {
  const { lat, lng } = useParams();
  console.log(lat, lng, "rrrrrr");
  const { foodSpot } = useSelector((state) => state.bookingDatas);
  // console.log(locationdata, "pppppep");
  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Banner
            image={
              "https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.jpg"
            }
          />
        </div>
        <div>
          <Stay foodSpot={foodSpot} lat={lat} lng={lng} button={"Book"} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Foodspot;
