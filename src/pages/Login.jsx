import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

import { useDispatch, useSelector } from "react-redux";
import { ToastView } from "../../Redux/ToastSlice";

function Login() {
  const { show, message, type } = useSelector((state) => state.Toastval);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // -------
  const { handleBlur, handleChange, handleSubmit, values, onSubmit, error } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (values) => {
        try {
          const res = await axios.post("http://localhost:3000/api/login", {
            email: values.email,
            password: values.password,
          });
          console.log(res);
          dispatch(
            ToastView({
              show: true,
              message: res.data.message,
              type: "#27c25a",
            })
          );

          navigate("/home");
        } catch (error) {
          dispatch(
            ToastView({
              show: true,
              message: error.response?.data?.error_message || "login faild",
              type: "#a69119",
            })
          );
        }
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
              <div>
                <h1
                  className="float-start text-white underline cursor-pointer mt-3"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  {" "}
                  register?
                </h1>
              </div>
            </form>
            {show && <Toast message={message} type={type} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
