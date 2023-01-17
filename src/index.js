import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";

import Navigation from "./Navigation";
import CurrentWeather from "./Current-weather-stat";
import CityDisplay from "./City-display";
import Forecast from "./Forecast";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div id="app"></div>

      <div className="card container-card-border">
        <div className="card-body container-card">
          <Navigation />
          <div className="row current-city-weather">
            <CurrentWeather />
            <CityDisplay />
          </div>
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
