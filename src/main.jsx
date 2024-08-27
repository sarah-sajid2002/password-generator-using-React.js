import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/first page/FirstPage";
import "./index.css";
import MainPage from "./components/main page/MainPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/PasswordGenerator" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
