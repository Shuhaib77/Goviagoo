import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/store.js";
// import { storeOtp } from "../../goviagoServer/src/services/otpService.js";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="848538970685-gdn5he0e9k6gnkgfgsqiqvl4o3mdce22.apps.googleusercontent.com">
    <ThemeProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </GoogleOAuthProvider>
);
