import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; 
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = "pk_test_bWF4aW11bS1jb2QtODMuY2xlcmsuYWNjb3VudHMuZGV2JA";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </ClerkProvider>
);
