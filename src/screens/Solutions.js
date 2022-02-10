import React from "react";
import {
  BgSec2,
  CircleGradient,
  CircleTransparent,
  DesignStar,
  Right1,
  Triangle,
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test6,
  Test7,
} from "../assets";
import Slider from "react-slick";
import { frontEndBaseUrl } from "../config.json";

const Solutions = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-1 sec-1-agency">
        <div className="design">
          <span className="design-star p-abs">
            <img src={DesignStar} />
          </span>
          <span className="design-circle p-abs">
            <img src={CircleTransparent} />
          </span>
          <span className="design-triangle p-abs">
            <img src={Triangle} />
          </span>
          <div className="container-1200">
            <div className="sec-1-text sec-for-agency-1">
              <h1>
                From big to boutique <br /> We work great for
                <br /> <span className="font-weight font-curve">PR agencies</span>
              </h1>
            </div>
            <div className="sec-for-agency-text-2 text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <button
                className="btn-reg"
                onClick={() => (window.location = frontEndBaseUrl)}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Try it now
              </button>
            </div>
          </div>
          <span className="design-triangle _right p-abs">
            <img src={DesignStar} />
          </span>
          <span className="circle-gradient p-abs for-agencies-circle">
            <img src={CircleGradient} />
          </span>
        </div>
      </section>

      <section className="section-2" id="form-fill">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2">
                  Less time on <span className="blue-black"> reporting admin </span>{" "}
                  More for PR activity
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto for-small-screen-laptop animation-none">
              <div className="sec-5-images">
                <img src={Right1} />
              </div>
            </div>
          </div>
        </div>
        <span className="triangle _2"></span>
      </section>

      <section className="section-3">
        <span className="gradient _3"></span>
        <span className="triangle _3"></span>
        <div className="container-1200">
          <div className="row col-rev-mob">
            <div className="col-lg-6 col-md-6 my-auto for-small-screen animation-none">
              <div className="sec-3-images sec-bg-3-images">
                <img src={BgSec2} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2">
                  A clear view of how your teams are{" "}
                  <span className="blue-black">performing</span>
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <span className="star _3"></span>
        <span className="circle _3"></span>
      </section>

      <section className="section-4">
        <span className="triangle _4"></span>
        <span className="star _4"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2">
                  PR measurement does not = big{" "}
                  <span className="blue-black">budget required</span>
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="row">
                <div className="col-lg-7 col-sm-6 col-6 mr-auto">
                  <div className="veiw-box after-arrow">
                    <h3>200k</h3>
                    <p>estimated Views</p>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-6 col-6 ml-auto">
                  <div className="veiw-box translate-x-some">
                    <h3>99M</h3>
                    <p>Online LeaderShip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="gradient _4"></span>
      </section>

      <section className="section-6">
        <div className="container-1200">
          <div className="testimages">
            <span>
              <img src={Test1} />
            </span>
            <span>
              <img src={Test2} />
            </span>
            <span>
              <img src={Test3} />
            </span>
            <span>
              <img src={Test4} />
            </span>
            <span>
              <img src={Test5} />
            </span>
            <span>
              <img src={Test6} />
            </span>
            <span>
              <img src={Test7} />
            </span>
          </div>

          <div>
            <h1 className="heading-huge heading-huge-2 text-center">
              Whart Our <span className="blue-black">Customer Say?</span>
            </h1>
          </div>

          <div className="testimonial-slider">
            <Slider {...settings}>
              {[1, 2, 3].map((item, i) => {
                return (
                  <div key={i} className="test-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.{" "}
                    </p>
                    <div className="clients-detail">
                      <h6>Fergus Douchebag</h6>
                      <span>Client</span>
                      <div className="ratings">
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <section className="section-5">
        <span className="triangle _5"></span>
        <span className="gradient _5"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-12 my-auto">
              <h1 className="heading-huge heading-huge-2">
                No <span className="blue-black">license charging.</span>
                <br />
                No <span className="blue-black">annual contracts.</span>
                <br />
                Pause or Cancel with <span className="blue-black"> no Hassle.</span>
              </h1>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident,laboris nisi ut aliquip sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="star _4"></span>
      </section>

      <section className="section-for-agencies">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="heading-huge heading-huge-2 text-center">
              Are you ready to provide{" "}
              <span className="blue-black"> better reports </span> to your clients
              and have a better view of{" "}
              <span className="blue-black"> agency success? </span>
            </h1>
            <p className="p-para">
              Gift your team with the free trial and let us make your lives
              better.
            </p>
            <button
              className="btn-reg margin-top-btn"
              onClick={() => (window.location = frontEndBaseUrl)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Try it now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
