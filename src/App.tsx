import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Calendar from "./components/calendar/Calendar";
import { weeks } from "./data";
import Week from "./components/week/Week";
import ScrollButton from "./components/scroll-button/ScrollButton";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Breadcrumbs />
        <Routes>
          <Route path="/d-calendar" element={ <Calendar /> } />
          {weeks.map((week: any) => (
            <Route key={week.link} path={`/d-calendar/${week.link}`} element={ <Week path={week.link} /> } />
          ))}
        </Routes>
        <div className="me-2 mb-1 float-end">
          <ScrollButton />
        </div>
      </Container>
    </BrowserRouter>
);
}

export default App;
