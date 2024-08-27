import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./components/first page/FirstPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
