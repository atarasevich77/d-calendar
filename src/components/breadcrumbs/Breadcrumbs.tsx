import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
  let location = useLocation();
  let pathNames = location.pathname.split('/').filter((x) => x !== 'd-calendar');

  return (
    <nav aria-label="breadcrumb" className="m-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className="" to="/d-calendar">Home</Link>
        </li>
        { pathNames.map((value, index) => {
          const last = index === pathNames.length - 1;
          const to = `/${pathNames.slice(0, index + 1).join('/')}`;

          if (value !== '') {
            return last ? (
              <li className="breadcrumb-item active" key={to}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </li>
            ) : (
              <li className="breadcrumb-item" key={to}>
                <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
