import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/first page/FirstPage";
import "./index.css";
import MainPage from "./components/main page/MainPage";
import Thanks from "./components/thankyou page/Thankyou";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/PasswordGenerator" element={<MainPage />} />
        <Route path="/Thanks!" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
