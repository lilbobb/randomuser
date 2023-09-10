import React from "react";
import NavBar from "./Navbar";
import RandomUsers from "./RandomUser";

const Users = () => {
  return (
    <div className="Signup-page">
      <NavBar />
      <div>
        <RandomUsers />
      </div>
    </div>
  );
};

export default Users;
