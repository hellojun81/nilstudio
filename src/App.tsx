import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Guide from "./pages/Guide";
import Space from "./pages/Space";
import Equipment from "./pages/Equipment";
import Schedule from "./pages/Schedule";
import Archives from "./pages/Archives";
import Location from "./pages/Location";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider"; // ImageSlider를 별도 파일로 분리
import "./index.css";
// import "./../assets/styles/Space.css";


const App: React.FC = () => {
  const location = useLocation(); // useLocation()은 Router 내부에서만 사용할 수 있음

  return (
    <>
      <Header />
      <Routes>
        <Route  />
        <Route path="/guide" element={<Guide />} />
        <Route path="/space" element={<Space />} />
        <Route path="/equipment" element={<Equipment />} />
        {/* <Route path="/schedule" element={<Schedule />} /> */}
        <Route path="/archives" element={<Archives />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      {location.pathname === "/" && <ImageSlider />}
    </>
  );
};

export default App;
