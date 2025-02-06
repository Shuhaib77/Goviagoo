import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Mainview from "../components/home/Mainview";
import Stay from "../components/home/Stay";
import Topreviews from "../components/home/Topreviews";
import Adds from "../components/home/Adds";
import Newadds from "../components/home/Newadds";
import { useDispatch, useSelector } from "react-redux";
import { getDestinationData } from "../../Redux/destinationSlice";

function Home() {
  const { data } = useSelector((state) => state.destination);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getDestinationData()) ;
  }, []);
  console.log(data);



  
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <div>
        <Banner
          image={
            "https://static.vecteezy.com/system/resources/previews/032/495/870/large_2x/hot-air-balloon-over-the-cappadocia-sky-generative-ai-free-photo.jpg"
          }
        />
      </div>

      <div>
        <Card1
          heading={"Popular Destinations"}
          paragraph={"explore destination with custom road mapsss"}
          icons={{
            name: "All destinations",
            icon: (
              <i
                class="fa-solid fa-arrow-right-long fa-xl ml-3"
                style={{ color: "#000000" }}
              ></i>
            ),
        
          }}
          image={data}
        />
      </div>
      <div>
        <Card2 />
      </div>
      <div>
        <Mainview />
      </div>
      {/* <div>
        <Stay />
      </div> */}
      <div>
        <Topreviews />
      </div>
      <div>
        <Adds />
      </div>
      <div>
        <Newadds />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
