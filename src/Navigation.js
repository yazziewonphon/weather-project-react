import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-muted">
      <div className="container-fluid">
        <div className="Navigation">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  class="form-control me-2 enter-a-city-search"
                  type="text"
                  placeholder="Enter a city"
                />
                <button
                  className="btn btn-primary me-2 search-button"
                  type="submit"
                >
                  Search
                </button>
                <input
                  type="submit"
                  value="Current City"
                  className="btn btn-outline-primary current-city-button"
                />
              </form>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
