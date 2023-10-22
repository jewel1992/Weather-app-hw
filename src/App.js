import "./App.css";
import Weather from "./Weather";
import React from "react";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Jeweldeen and is
          <a
            href="https://github.com/jewel1992"
           target="_blank" rel="noopener noreferrer"
          >
            {" "}
            open-sorced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}