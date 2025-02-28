import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, googleLogout, GoogleLogin } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
// import { ToastView } from "../../Redux/ToastSlice";
import Toast from "../components/Toast";
// import tryCatch from "../../../goviagoServer/src/middlewares/tryCatch";
import { registerSchema } from "../utils/registerValidation";
import useToast from "../hooks/useToast";
// import { set } from "mongoose";
function Register() {
  const [otp, setOtp] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const { show, message, type } = useSelector((state) => state.Toastval);
  const { toast } = useToast();
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
        type: "green",
      });
      navigate("/home");
      // console.log(res, "iam");
    } catch (error) {
      toast({
        show: true,
        message: error?.response?.data?.error_message || "google login failed",
        type: "red",
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

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  console.log(user, "3rfrd");

  const formikreg = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      image: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      console.log(values,"ewdd");
      
      try {
          await axios.post("https://goviagoo-server.onrender.com/api/register", {
          name: values.name,
          email: values.email,
          password: values.password,
          image: values.image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
        
        toast({
          show: true,
          message: "otp send successfully",
          type: "green",
        });
        setOtp(true);
        console.log(res);
      } catch (error) {
        toast({
          show: true,
          message: error.response.message || "otp sen d failed",
          type: "red",
        });
      }
    },
  });
  const formikotp = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (values) => {
      try {
        const formdata = new FormData();
        formdata.append("otp", values.otp);
        formdata.append("email", formikreg.values.email);
        formdata.append("name", formikreg.values.name);
        formdata.append("password", formikreg.values.password);
        formdata.append("image", formikreg.values.image);
        // formdata.append("email",values.email)
        const res = await axios.post(
          "https://goviagoo-server.onrender.com/api/verifyotp",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast({
          show: true,
          message: "register successfull",
          type: "#27c25a",
        });

        navigate("/login");
        console.log(res);
      } catch (error) {
        toast({
          show: true,
          message: error.response.data.message || "register successfull",
          type: "#a69119",
        });
      }
    },
  });

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      formikreg.setFieldValue("image", file);
      setImagePreview(URL.createObjectURL(file));
      console.log(file.name);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-100% flex justify-start  items-center bg-register-bg bg-cover  r  ">
        <div className="w-full h-full absolute bg-black opacity-30"></div>
        <div className="  ">
          {/* <img
              src="https://www.keralatourism.org/images/homecontentimage/desktop/ecotourism.jpg"
              alt=""
              className="w-full h-[50vh] object-cover rounded-md "
            /> */}
        </div>

        <div className="z-10 h-[50vh] bg-[#f5f8f51e]  rounded-md w-[60vh] mb-10 ml-10">
          {!otp ? (
            <form
              action=""
              className="flex flex-col w-full h-full  justify-center p-5 "
              onSubmit={
                formikreg.handleSubmit
              }
            >
              <h1 className="text-blue-400 mb-10 text-center font-bold text-4xl">
                REGISTER
              </h1>
              <div>
                <Input
                  label="image"
                  type="file"
                  className="bg-white t "
                  onChange={handleImage}
                  onBlur={formikreg.handleBlur}
                  // value={formikreg.values.name}
                  name="image"
                ></Input>
              </div>
              <div className="mt-5">
                <Input
                  label="name"
                  className="bg-white  "
                  onChange={formikreg.handleChange}
                  onBlur={formikreg.handleBlur}
                  value={formikreg.values.name}
                  name="name"
                ></Input>
                {formikreg.errors.name && (
                  <span className="text-red-200 text-xs">
                    {formikreg.errors.name}
                  </span>
                )}
              </div>
              <div className="mt-5 mb-5">
                <Input
                  label="email"
                  className="bg-white "
                  onChange={formikreg.handleChange}
                  onBlur={formikreg.handleBlur}
                  value={formikreg.values.email}
                  name="email"
                ></Input>
                {formikreg.errors.email && (
                  <span className="text-red-200 text-xs">
                    {formikreg.errors.email}
                  </span>
                )}
              </div>
              <div>
                <Input
                  label="password"
                  className="bg-white"
                  onChange={formikreg.handleChange}
                  onBlur={formikreg.handleBlur}
                  value={formikreg.values.password}
                  name="password"
                ></Input>
                {formikreg.errors.password && (
                  <span className="text-red-200 text-xs">
                    {formikreg.errors.password}
                  </span>
                )}
              </div>

              <div className="text-center mt-5 mb-5">
                <Button
                  type="submit"
                  className="cursor-pointer bg-white text-black"
                >
                  Submit
                </Button>

                {console.log(formikreg.values)}
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
                <div className=" text-white w-full flex justify-center items-center text-center   rounded-md">
                  <GoogleLogin
                    onSuccess={handleloginsuccess}
                    onError={handlegooglelogin}
                    className="w-full"
                    width="100%"
                    type="standard"
                    theme=""
                    size="large"
                    shape="rectangular"
                  />
                </div>
                {/* )} */}
              </div>
            </form>
          ) : (
            <form
              action=" "
              className="w-full h-full  flex flex-col p-20    justify-center"
              onSubmit={formikotp.handleSubmit}
            >
              <h1 className="text-white text-4xl font-bold text-center mb-10">
                Register
              </h1>

              <div className=" mt-5 mb-5 w-92">
                <Input
                  label="otp"
                  className="bg-white"
                  onChange={formikotp.handleChange}
                  onBlur={formikotp.handleBlur}
                  value={formikotp.values.otp}
                  name="otp"
                ></Input>
              </div>
              <div className="text-center ">
                <Button type="submit" className=" bg-blue-300 cursor-pointer ">
                  Submit
                </Button>
                {console.log(formikotp.values)}
              </div>
            </form>
          )}

          {show && <Toast message={message} type={type} />}
        </div>
        <div></div>
      </div>
    </>
  );
}
export default Register;
