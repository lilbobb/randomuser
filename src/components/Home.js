import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <NavBar />
      </div>
      <div className="home-page-body">
        <h1>Welcome to BobTech</h1>
        <p>Explore your world in Technical Writing</p>
        <Link to="/SignUp" className="Signup">
          Create An Account With us
        </Link>
      </div>
    </div>
  );
};

export default Home;
