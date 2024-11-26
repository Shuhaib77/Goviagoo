import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId='848538970685-gdn5he0e9k6gnkgfgsqiqvl4o3mdce22.apps.googleusercontent.com' >
   
      <App />
  
  </GoogleOAuthProvider>
);
