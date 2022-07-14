import React from "react";
const api = {
  key: "a2d3cc406eef814c9d3e63ae1b50e80f",
  base: "https://openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Yalague-Labe, GN</div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
