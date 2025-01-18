import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <section id="About">
        <h2 className="text-center text-uppercase position-relative">about</h2>
        <div className="psodo mx-auto position-relative">
        <i className="fa-solid fa-star fs-2 start-50 translate-middle-x"></i>
        </div>
        <div className="container-fluid container-md d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 p-4">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-lg-4 p-4">
            <p>
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
