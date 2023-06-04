import React from "react";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/homepage.jsx";
import Galeries from "./pages/galeries.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeries" element={<Galeries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
