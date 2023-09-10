import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="Signup-page">
      <div>
        <NavBar />
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="Enter Firstname" name="name" />
          <input type="text" placeholder="Enter Lastname" name="name" />
          <input type="text" placeholder="Enter Username" name="name" />
          <input type="text" placeholder="Enter Your Email" name="email" />
          <input type="password" placeholder="Enter Password" name="password" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
          />
        </form>
        <button type="submit">Submit</button>
      </div>
      <footer>
        <p>
          Already have an account?{" "}
          <strong>
            <Link to="/Login" className="footerlink">
              Sign in
            </Link>
          </strong>
        </p>
      </footer>
    </div>
  );
};

export default SignUp;
