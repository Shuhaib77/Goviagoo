import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";

function Login() {
  const { handleBlur, handleChange, handleSubmit, values, onSubmit, error } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        const res = await axios.post("http://localhost:3000/api/login", {
          email: values.email,
          password: values.password,
        });
        console.log(res);
      },
    });

  return (
    <>
      <div className=" w-100%   h-full ">
        <div className="h-[100vh] w-100% flex justify-center items-center bg-login-bg bg-cover  r  ">
          <div className="w-full h-full absolute bg-black opacity-35"></div>
          <div className="  ">
            <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/ecotourism.jpg"
              alt=""
              className="w-full h-[50vh] object-cover rounded-md "
            />
          </div>

          <div className=" z-10 bg-[#0f1a239a] h-[50vh]  rounded-md w-[60vh]">
            <form
              action=" "
              className="w-full h-full  flex flex-col p-20    justify-center"
              onSubmit={handleSubmit}
            >
              <h1 className="text-white text-4xl font-bold text-center mb-10">
                LOGIN{" "}
              </h1>
              <div>
                <Input
                  label="email"
                  className=" bg-white"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                ></Input>
              </div>
              <div className=" mt-5 mb-5 w-92">
                <Input
                  label="password"
                  className="bg-white"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                ></Input>
              </div>
              <div className="text-center ">
                <Button type="submit" className=" bg-blue-300 cursor-pointer ">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
