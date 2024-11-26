import { useState,useEffect } from 'react'
import { useGoogleLogin,googleLogout ,GoogleLogin} from '@react-oauth/google';

import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

//  const login = useGoogleLogin({
//         onSuccess: (codeResponse) => setUser(codeResponse),
//         onError: (error) => console.log('Login Failed:', error)
//     });

const handleloginsuccess = async (credentialresponse)=>{
  const {credential}=credentialresponse
  console.log(credential,'iam')
}
const handlegooglelogin=()=>{
  console.log("authantication failed");
  
  
}

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                     
                      // console.log(res,"grvcgrv");
                      
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };
    console.log(user,"3rfrd");
    
console.log(profile);

    return (
      <>
        {/* <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                // <button onClick={() => login()}>Sign in with Google 🚀 </button>
                <GoogleLogin onSuccess={handleloginsuccess} onError={handlegooglelogin}/>
            )}
        </div> */}

        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          </Routes>
        </>


  )
}

export default App
