import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { ToastView } from "../../Redux/ToastSlice";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { loginschema } from "../utils/loginValidation";
import useToast from "../hooks/useToast";

function Login() {
  const { show, message, type } = useSelector((state) => state.Toastval);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  //-----
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const handleloginsuccess = async (credentialresponse) => {
    try {
      const { credential } = credentialresponse;
      const res = await axios.post("https://goviagoo-server.onrender.com/api/googlelogin", {
        idToken: credential,
      });
      localStorage.setItem("id", res.data.user._id);
      toast({
        show: true,
        message: "google login successfull",
        type: "#5da364",
      });
   
      navigate("/home");
      console.log(res, "iam");
    } catch (error) {
      toast({
        show: true,
        message: error?.response?.data?.error_message || "google login failed",
        type: "#a6354a",
      });
    }
  };
  const handlegooglelogin = () => {
    console.log("authantication failed");
  };
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res,"grvcgrv");
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  // -------
  const { handleBlur, handleChange, handleSubmit, values, onSubmit, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginschema,
      onSubmit: async (values) => {
        try {
          const res = await axios.post("https://goviagoo-server.onrender.com/api/login", {
            email: values.email,
            password: values.password,
          });
          console.log(res);
          toast({
            show: true,
            message: res.data.message,
            type: "#5da364",
          });

          localStorage.setItem("id", res.data.user._id);
          navigate("/home");
        } catch (error) {
          toast({
            show: true,
            message: error.response?.data?.error_message || "login faild",
            type: "#a6354a",
          });
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
                {errors.email && (
                  <span className="text-red-200 text-xs">{errors.email}</span>
                )}
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
                {errors.password && (
                  <span className="text-red-200 text-xs">
                    {errors.password}
                  </span>
                )}
              </div>
              <div className="text-center ">
                <Button type="submit" className=" bg-blue-300 cursor-pointer ">
                  Submit
                </Button>
              </div>
              <div>
                {/* {profile ? ( */}
                <div>
                  {/* <img src={profile.picture} alt="user image" />
                      <h3>User Logged in</h3>
                      <p>Name: {profile.name}</p>
                      <p>Email Address: {profile.email}</p> */}
                  {/* <br />
                      <br />
                      <Button onClick={logOut}>Log out</Button> */}
                </div>
                {/* ) : ( */}
                {/* // <button onClick={() => login()}>Sign in with Google 🚀 </button> */}
                <div className="bg-black text-white mt-5 w-[100%]  rounded-md">
                  <GoogleLogin
                    onSuccess={handleloginsuccess}
                    onError={handlegooglelogin}
                  />
                </div>
                {/* )} */}
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
