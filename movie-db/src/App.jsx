// App.js
import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewReleases from "./components/NewReleases";
import WhatsHot from "./components/WhatsHot";
import "./style.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/new" element={<NewReleases />} />
        <Route path="/hot" element={<WhatsHot />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;