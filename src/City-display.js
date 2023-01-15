import React from "react";

import "./City-display.css";

export default function CityDisplay() {
  return (
    <div className="card cr-body shadow p-3 mb-5 bg-body rounded">
      <div className="card-body cr-inside-body">
        <h2>Cedar Rapids, USA</h2>
        <div className="col-6">
          <p id="date-and-time">
            Sunday 11:00 PM
            <div className="weather-condition">Mist</div>
          </p>
        </div>
      </div>
    </div>
  );
}
