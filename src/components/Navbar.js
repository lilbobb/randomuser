import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
// import "./hambuger.png"


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="brand">BobTech</div>
      <nav  className="nav">
        <Link to="/" className="pages">
          Home
        </Link>
        <Link to="/About" className="pages">
          About
        </Link>
        <Link to="/SignUp" className="pages">
          Signup
        </Link>
        <Link to="/Login" className="pages">
          Signin
        </Link>
        <Link to="/Users" className="pages">
          Users
        </Link>
      </nav>
    <img src={require ("../hambuger.png")} id="navbar-btn" alt="" onClick={()=>setShowMenu(!showMenu)} />
  {
    showMenu && (
      <nav className="mobileNav">
      <Link to="/" className="pages">
        Home
      </Link>
      <Link to="/About" className="pages">
        About
      </Link>
      <Link to="/SignUp" className="pages">
        Signup
      </Link>
      <Link to="/Login" className="pages">
        Signin
      </Link>
      <Link to="/Users" className="pages">
        Users
      </Link>
    </nav>
    )
  }

    </div>
  );
};

export default NavBar;
