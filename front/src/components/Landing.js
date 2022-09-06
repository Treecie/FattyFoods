import React from "react";

const Landing = props => (
  <div className="landing-container">
    <h1 className="landing-title" data-letters="Fatty Foods">
      plan<span className="landing-underline-b">F</span>
      <span className="landing-e">s</span>
    </h1>
    <h2 className="landing-subtitle">keto living</h2>

    <section className="landing-buttons">
      <button className="btn btn-light-green" onClick={props.onRegisterClick}>
        Sign Up
      </button>
      <button className="btn btn-light-green" onClick={props.onLoginClick}>
        Sign In
      </button>
    </section>
  </div>
);

export default Landing;