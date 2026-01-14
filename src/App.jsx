import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video_Room from "./Video_Room";
import ZegoClound from "./ZegoClound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ZegoClound />}></Route>
        <Route path="/room/:id" element={<Video_Room />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

