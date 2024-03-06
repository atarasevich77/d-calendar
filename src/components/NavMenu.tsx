import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function NaviMenu() {
  const location = useLocation();
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setIsActive('active');
    } else {
      setIsActive('');
    }
  }, [location.pathname]);

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className={`nav-link ${isActive}`} href="/">Home</a>
      </li>
    </ul>
  )
}

export default NaviMenu;
