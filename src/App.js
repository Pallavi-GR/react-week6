import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="container">
          <Weather defaultCity="Bangalore" />
        </header>

        <footer>
          This page is code by Pallavi G R and is Open-sourded on GITHUB{" "}
          <a
            href="https://github.com/Pallavi-GR/react-week5.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}@ PALLAVI GR
          </a>{" "}
          and
          <a
            href="https://roaring-cactus-8c0848.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
