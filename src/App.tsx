import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar";
import Week1 from "./components/weeks/Week1";
import Week2 from "./components/weeks/Week2";
import Week3 from "./components/weeks/Week3";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Calendar /> } />
        <Route path="/week-1" element={ <Week1 /> } />
        <Route path="/week-2" element={ <Week2 /> } />
        <Route path="/week-3" element={ <Week3 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
