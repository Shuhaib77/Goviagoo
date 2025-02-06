import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ContactDetails from "../components/contact/ContactDetails";

function Contact() {
  return (
    <>
      <div>
        <div className="sticky top-0">
          <Header />
        </div>
        <div>
          <Banner image={"https://liverpool.co.in/cdn/shop/files/contactus.jpg?v=1696432841&width=750"}/>
        </div>
        <div>
            <ContactDetails/>
        </div>

      </div>
    </>
  );
}

export default Contact;
