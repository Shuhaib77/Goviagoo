import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Card4 from "../components/cards/Card4";
import Card3 from "../components/cards/Card3";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { stayData } from "../../Redux/bookingSlice";
import { useParams } from "react-router-dom";

function Accommadation() {

 
  const {lat,lng,rid}=useParams()
  console.log(lat,lng,rid,"rrrrrr");
  const { locationdata } = useSelector((state) => state.bookingDatas);
  console.log(locationdata, "pppppep");

  return (
    <>
      <div>
        <div className="sticky top-0">
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
          <Card4 locationdata={locationdata} lat={lat} lng={lng} rid={rid}  />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Accommadation;
