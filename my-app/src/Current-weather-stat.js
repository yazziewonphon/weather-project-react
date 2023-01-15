import React from "react";

import "./Current-weather-styles.css";

export default function CurrentWeather() {
  return (
    <div className="col-6">
      <div className="Current-weather">
        <h1>
          <span>
            <img src="" alt="" className="current-weather-emoji" />
          </span>
          <span id="temperature">🌡</span>
          <span className="units">
            {" "}
            35
            <a href="#" id="fahrenheit-link">
              °F
            </a>{" "}
            |{" "}
            <a href="#" id="celsius-link">
              °C
            </a>
          </span>
        </h1>
        <p>
          <div id="humidity">Humidity: </div>
          <div id="wind">Wind: </div>
        </p>
      </div>
    </div>
  );
}
