import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <header>
      Ziya Gan
    </header>
    <nav>
      <Link to="/">
        <div className="nav-item">
          Home
        </div>
      </Link>
      <Link to="/about">
        <div className="nav-item">
          About
        </div>
      </Link>
    </nav>
  </div>
)

export default NavBar;