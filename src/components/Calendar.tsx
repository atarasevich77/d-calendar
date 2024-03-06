import React from "react";
import { Link } from 'react-router-dom';

function Calendar() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card text-center w-75 m-2">
        <div className="card-body">
          <h2 className="card-title mb-4">Diet Calendar</h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Week #1</h5>
                    <div className="card-text m-2">
                      <Link to="/week-1" className="link-underline-light">Menu for first week.</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Week #2</h5>
                    <div className="card-text m-2">
                      <Link to="/week-2" className="link-underline-light">Menu for second week.</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Week #3</h5>
                    <div className="card-text m-2">
                      <Link to="/week-3" className="link-underline-light">Menu for third week.</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
