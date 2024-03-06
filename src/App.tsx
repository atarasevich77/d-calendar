import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Calendar from "./components/calendar/Calendar";
import { weeks } from "./data";
import Week from "./components/week/Week";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={ <Calendar /> } />
          {weeks.map((week: any) => (
            <Route key={week.name} path={`/${week.name}`} element={ <Week path={week.name} /> } />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
);
}

export default App;
