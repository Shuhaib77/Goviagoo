import React from "react";
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

function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner
          image={
            "https://www.pixelstalk.net/wp-content/uploads/images7/Turkey-Wide-Screen-Wallpaper.jpg"
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
        />
      </div>
      <div>
        <Card2 />
      </div>
      <div>
        <Mainview />
      </div>
      <div>
        <Stay />
      </div>
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
