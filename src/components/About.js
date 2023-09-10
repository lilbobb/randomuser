import React from "react";
import NavBar from "./Navbar";

const About = () => {
  return (
    <div className="About-page">
      <div>
        <NavBar />
      </div>
      <div className="About-body">
        <h2>
          We are <i>BobTech,</i> committed in offering Explicit content in
          Technical Writing
        </h2>

        <h2>
          We find joy in helping people write technical aritcles to help them
          widen their mindsets and growth towards Tech.
        </h2>
      </div>
    </div>
  );
};

export default About;
