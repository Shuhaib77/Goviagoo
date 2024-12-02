import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, googleLogout, GoogleLogin } from "@react-oauth/google";

function Register() {
  const [otp, setOtp] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  //  const login = useGoogleLogin({
  //         onSuccess: (codeResponse) => setUser(codeResponse),
  //         onError: (error) => console.log('Login Failed:', error)
  //     });

  const handleloginsuccess = async (credentialresponse) => {
    const { credential } = credentialresponse;
    await axios.post('')
    console.log(credential, "iam");
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
    },
    onSubmit: async (values) => {
      const res = await axios.post("http://localhost:3000/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      setOtp(true);
      console.log(res);
    },
  });
  const formikotp = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (values) => {
      const res = await axios.post("http://localhost:3000/api/verifyotp", {
        email: formikreg.values.email,
        otp: values.otp,
      });
      navigate("/home");
      console.log(res);
    },
  });

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

        <div className="z-10 h-[50vh] bg-white rounded-md w-[50vh] mb-10 ml-10">
          {!otp ? (
            <form
              action=""
              className="flex flex-col w-full h-full  justify-center p-5 "
              onSubmit={formikreg.handleSubmit}
            >
              <h1 className="text-blue-400 mb-10 text-center font-bold text-4xl">
                REGISTER
              </h1>
              <div>
                <Input
                  label="name"
                  className="bg-white"
                  onChange={formikreg.handleChange}
                  onBlur={formikreg.handleBlur}
                  value={formikreg.values.name}
                  name="name"
                ></Input>
              </div>
              <div className="mt-5 mb-5">
                <Input
                  label="email"
                  className="bg-white"
                  onChange={formikreg.handleChange}
                  onBlur={formikreg.handleBlur}
                  value={formikreg.values.email}
                  name="email"
                ></Input>
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
                <div>
            
                  {profile ? (
                    <div>
                      <img src={profile.picture} alt="user image" />
                      <h3>User Logged in</h3>
                      <p>Name: {profile.name}</p>
                      <p>Email Address: {profile.email}</p>
                      <br />
                      <br />
                      <Button onClick={logOut}>Log out</Button>
                    </div>
                  ) : (
                    // <button onClick={() => login()}>Sign in with Google 🚀 </button>
                    <GoogleLogin
                      onSuccess={handleloginsuccess}
                      onError={handlegooglelogin}
                    />
                  )}
                </div>
              </div>
            </form>
          ) : (
            <form
              action=" "
              className="w-full h-full  flex flex-col p-20    justify-center"
              onSubmit={formikotp.handleSubmit}
            >
              <h1 className="text-white text-4xl font-bold text-center mb-10">
                Register{" "}
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
        </div>
      </div>
    </>
  );
}
export default Register;
// export default Register: useFormik({
//   initialValues: {
//     otp: "",

//   },
//   onSubmit: async(values) => {
//     const res = await axios.post("http://localhost:3000/api/verifyotp", {
//       otp: values.otp,

//     });
//     console.log(res);

//   },
// })
