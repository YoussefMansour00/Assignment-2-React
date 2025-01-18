import React, { useEffect } from "react";
import "./Portfolio.js"
import "./Portfolio.css";
import ToAppearPicture from "./Portfolio.js";


export default function Portfolio() {
  return (
    <> 
   {  useEffect( () => {
    ToAppearPicture()
   },[])}
      <section id="Portfolio">
        <div className="container-fluid container-md">
          <h2 className=" text-center text-uppercase">Portfolio</h2>
          <div className="psodoPortfolio mx-auto position-relative">
            <i className="fa-solid fa-star fs-2 start-50 translate-middle-x"></i>
          </div>
          <div className="row gy-5 my-2">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/1.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/11.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/12.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/13.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/14.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <div className="myImage position-relative">
                <img
                  src="/src/images/15.png"
                  alt=""
                  className="d-block w-100 rounded rounded-4"
                />
                <div className="layer top-0 start-0 end-0 bottom-0 rounded rounded-4">
                  <i className="fa-solid fa-plus position-absolute top-50 start-50 translate-middle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Layer" className=" d-none">
        <div className="box_model z-3 ">
          <div className="row d-flex justify-content-center ">
            <div className="col-12 col-md-7 position-relative">
              <div className="subContent my-4  d-flex justify-content-center align-items-center mx-auto">
                <h2 className="z-2 position-absolute">LOG CABIN</h2>
                <div className="toCenterPsodo position-absolute">
                  <div className="psodoSubSection z-2 mx-auto position-relative">
                    <i className="fa-solid fa-star fs-2 start-50 translate-middle-x"></i>
                  </div>
                </div>
                <div className="box">
                </div>
                <div className="icon position-absolute">
                    <i className="xMark fa-solid fa-x text-black"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
