import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function ContactDetails() {
  return (
    <>
      <div>
        <div className="flex justify-around items-center w-full">
          <div className="text-center">
            <i class="fa-solid fa-phone fa-2xl"></i>
            <h1>34567876</h1>
            <h1>(+982626636)</h1>
          </div>
          <div className="text-center">
            <i class="fa-solid fa-location-dot fa-2xl"></i>
            <h1>permbra vi kaithakkal </h1>
            <h1>kerala</h1>
          </div>
          <div className="text-center">
            <i class="fa-solid fa-envelope fa-2xl"></i>
            <h1>shuhaib@121.com</h1>
            <h1>shihab@121.com</h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-x-5 p-16">
          <div className="h-[500px] w-[450px]">
            <img
              src="https://i.pinimg.com/originals/ae/8e/03/ae8e039cbea9a72eb4132f2e84cab111.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full ">
            <div className="ml-20">
              <h1 className="text-2xl font-bold">
                Contact Us For Any Questions
              </h1>
              <h1 className="text-sm font-medium">
                Eu id cras morbi consectetur viverra eleifend pellentesque dui.{" "}
              </h1>
            </div>
            <div className=" grid grid-cols-2 place-content-around w-full gap-y-10 gap-x-5 p-10 ml-10  ">
              <Input label="name"></Input>
              <Input label="phone"></Input>
              <Input label="email"></Input>
              <Input label="subject"></Input>
            </div>
            <div className=" p-10 w-full ml-10">
              <Textarea label="message"></Textarea>
            </div>
            <div className="pl-20">
            <Button className="w-full ">submit</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px] pl-16 pr-16">
          <img
            src="https://images8.alphacoders.com/134/1343322.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
