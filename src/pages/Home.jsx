import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
        <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Home;
