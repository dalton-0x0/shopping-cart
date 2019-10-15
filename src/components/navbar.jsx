import React from "react";

// stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://google.com">
        Navbar{" "}
        <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
