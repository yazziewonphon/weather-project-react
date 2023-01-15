import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Navigation from "./Navigation";
import CurrentWeather from "./Current-weather-stat";
import CityDisplay from "./City-display";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
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
  </StrictMode>
);
