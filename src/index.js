import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Group from "./components/Group";
import reportWebVitals from "./reportWebVitals";
import Solo from "./components/Solo";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import NavBar from "./components/NavBar";


ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="group" element={<Group />} />
      <Route path="solo" element={<Solo/>} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
