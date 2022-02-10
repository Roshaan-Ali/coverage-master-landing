import React, { useState } from "react";
import {
  CircleGradient,
  DesignStar,
  Triangle,
  YouCan2,
  YouCan1,
  YouCan3,
  YouCan4,
} from "../assets";
import { frontEndBaseUrl } from "../config.json";
import { validateEmail } from "../Utils";

const HowItWorks = () => {
  const [email1, setEmail1] = useState({
    email: "",
    error: "",
  });
  const [email2, setEmail2] = useState({
    email: "",
    error: "",
  });
  // let soultionsData = [
  //   {
  //     title:
  //       " Customisable reports ready to share with your clients in minutes",
  //     para1:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     para2:
  //       " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     img: YouCan1,
  //   },
  //   {
  //     title: "Don’t get left behind on measurement",
  //     para1:
  //       " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     para2: "",
  //     img: YouCan2,
  //   },
  //   {
  //     title: "All your reports in one place, accessible wherever you go",
  //     para1:
  //       " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     para2:
  //       " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     img: YouCan3,
  //   },
  //   {
  //     title: "Searchable coverage vault of all your results",
  //     para1:
  //       " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     para2:
  //       " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     img: YouCan4,
  //   },
  // ];

  const _freeTrial = (e) => {
    
    if (e.target.name === "free-top") {
      if (email1.email === "") {
        setEmail1({
          ...email1,
          error: "Email is required",
        });
      } else if (!validateEmail(email1.email)) {
        setEmail1({
          ...email1,
          error: "Email is badly formatted",
        });
      } else {
        console.log("work1")
        window.location.href = `${frontEndBaseUrl}/signup`;
      }
    } else {
      if (email2.email === "") {
        setEmail2({
          ...email2,
          error: "Email is required",
        });
      } else if (!validateEmail(email2.email)) {
        setEmail2({
          ...email2,
          error: "Email is badly formatted",
        });
      } else {
        // setEmail2({ ...email2, error: "" });
        console.log("work2")
        window.location.href = `${frontEndBaseUrl}/signup`;
      }
    }
  };
  return (
    <>
      <section className="section-1 sec-1-image-before you-can-1-top-section">
        <div className="design">
          <span className="design-star p-abs">
            <img src={DesignStar} />
          </span>
          <span className="design-triangle p-abs">
            <img src={Triangle} />
          </span>
          <div className="container-1200">
            <div className="sec-1-text sec-for-agency-1">
              <h1>
                Showcase <span className="font-weight"> coverage </span>
                <br />& measure{" "}
                <span className="font-weight font-curve"> performance</span>
              </h1>
            </div>
            <div className="text-center you-can-do-it">
              <p>
                Get started right away and try it with your own coverage. No
                credit card required.
              </p>

              <div className={`search-bar-btn`}>
                <input
                  type="email"
                  value={email1.email}
                  onChange={(e) =>
                    setEmail1({ ...email1, email: e.target.value })
                  }
                  onFocus={() => setEmail1({ ...email1, error: "" })}
                  placeholder="Email"
                />
                <button
                  className="btn-reg free-trial"
                  name="free-top"
                  onClick={(e) => {
                    _freeTrial(e);
                    // if (email1.email === "") {
                    //   setEmail1({ ...email1, error: "Email is required" });
                    // } else {
                    //   window.location.href = `${frontEndBaseUrl}/signup`;
                    // }
                  }}
                >
                  Free Trial
                </button>
                {email1.error !== "" && (
                  <small
                    className="d-block alert alert-danger w-100 font-weight-bold position-absolute"
                    role="alert"
                  >
                    {email1.error}
                  </small>
                )}
              </div>
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

      <section className="section-2">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2 you-can-heading-huge">
                  <span className="blue-black">
                    Customisable reports <br />
                  </span>{" "}
                  ready to share with your clients in minutes
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
                <img src={YouCan1} />
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
                <img src={YouCan2} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2 you-can-heading-huge">
                  Don’t get left behind on{" "}
                  <span className="blue-black"> measurement</span>
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

      <section className="section-2">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2 you-can-heading-huge">
                  All your{" "}
                  <span className="blue-black">
                    {" "}
                    reports in <br /> one place,{" "}
                  </span>
                  accessible wherever you go
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
                <img src={YouCan3} />
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
                <img src={YouCan4} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge heading-huge-2 you-can-heading-huge">
                  Searchable{" "}
                  <span className="blue-black"> coverage vault </span> of all
                  your results{" "}
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
                <h1 className="heading-huge heading-huge-2 you-can-heading-huge">
                  Realistic <span className="blue-black"> PR metrics </span>{" "}
                  that can be compared to the{" "}
                  <span className="blue-black">rest of marketing </span>
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
                    <h3>500k</h3>
                    <p>estimated Views</p>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-6 col-6 ml-auto">
                  <div className="veiw-box translate-x-some">
                    <h3>199M</h3>
                    <p>Online LeaderShip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="gradient _4"></span>
      </section>

      <section className="section-for-agencies section-you-can-5">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="heading-huge heading-huge-2 you-can-heading-huge text-center">
              Tired of reporting like <br /> it’s{" "}
              <span className="blue-black"> still 1999? </span>
            </h1>
            <p className="p-para">
              Take the pain out of PR reporting. Try CoverageBook today.
            </p>
            <div className="search-bar-btn _2">
              <input
                type="email"
                value={email2.email}
                onChange={(e) =>
                  setEmail2({ ...email2, email: e.target.value })
                }
                onFocus={() => setEmail2({ ...email2, error: "" })}
                placeholder="Email"
              />
              <button
                className="btn-reg free-trial"
                name="free-bottom"
                onClick={(e) => {
                  _freeTrial(e);
                  // if (email2.email === "") {
                  //   setEmail2({ ...email2, error: "Email is required" });
                  // } else {
                  //   window.location.href = `${frontEndBaseUrl}/signup`;
                  // }
                }}
              >
                Free Trial
              </button>
              {email2.error !== "" && (
                <small
                  className="d-block alert alert-danger w-100 font-weight-bold position-absolute"
                  role="alert"
                >
                  {email2.error}
                </small>
              )}
            </div>
            {/* {email2.error !== "" && (
              <small className="text-danger text-left font-weight-bold">
                {email2.error}
              </small>
            )} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
