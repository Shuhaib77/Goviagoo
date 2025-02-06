import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { Input } from "@material-tailwind/react";
import Cards5 from "../components/cards/Cards5";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getDestinationData } from "../../Redux/destinationSlice";
import axios from "axios";

function Destinations() {
  const { data } = useSelector((state) => state.destination);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getDestinationData()) ;
  }, []);
  console.log(data);




  return (
    <>
      <div>
        <div className="sticky top-0">
          <Header />
        </div>
        <div>
          <Banner
            image={
              "https://t4.ftcdn.net/jpg/05/92/47/71/360_F_592477175_aTKBiDv9cllHHsnSqTuRNfz1SXQnf2NM.jpg"
            }
            searchbar={{
              input: (
                <Input
                  label="search"
                  className="grid place-content-end bg-white "
                ></Input>
              ),
              icon: (
                <i
                  class="fa-solid fa-magnifying-glass"
                  style={{ color: "#000000" }}
                ></i>
              ),
            }}
          />
        </div>
        <div>
          <Cards5 />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Destinations;
