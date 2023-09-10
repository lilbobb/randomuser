import React from "react";
import NavBar from "./Navbar";

const Login = () => {
  return (
    <div className="login-page">
      <div>
        <NavBar />
      </div>
      <div className="form-container">
        <h1 className="head">It's free!</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const { name, email, tel } = event.target.elements;
            alert(
              `hello ${name.value}! Your Email is ${email.value} and your phone is ${tel.value}`
            );
          }}
        >
          <input type="text" placeholder="Enter Username" name="name" />
          <input type="text" placeholder="Enter your email" name="email" />
          <input
            type="password"
            value="password"
            placeholder="password"
            name="password"
          />
        </form>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Login;
