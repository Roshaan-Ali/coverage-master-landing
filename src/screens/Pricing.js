import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, frontEndBaseUrl } from "../config.json";
import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";

// const points = [40, 100, 1, 5, 25, 10];
//   let data = [];
//   for (let i = 0; i < points.length; i++) {
//     for (let j = i + 1; j <= points.length; j++) {
//       if (points[i] > points[j]) {
//         data.push(points[j]);
//         console.log("---------------------------------");
//         break;
//       } else {
//         data.push(points[i]);
//         console.log(":::::::::::::::::::::::::::::::::");
//         break;
//       }
//     }
//   }
//   console.log(data)

const Pricing = () => {
  const [subscriptionType, setSubscriptionType] = useState(
    []
    //   [
    //   {
    //     name: "Bronze",
    //     price: 99,
    //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
    //     info: "For teams who add less than 100 clips/month* across their brands or clients",
    //   },
    //   {
    //     name: "Bronze Plus",
    //     price: 105,
    //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
    //     info: "For teams who add less than 100 clips/month* across their brands or clients",
    //   },
    //   {
    //     name: "Silver",
    //     price: 105,
    //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
    //     info: "For teams who add less than 100 clips/month* across their brands or clients",
    //   },
    //   {
    //     name: "Gold",
    //     price: 105,
    //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
    //     info: "For teams who add less than 100 clips/month* across their brands or clients",
    //   },
    // ]
  );
  const [isApiCall, setIsApiCall] = useState(false);
  let [caseAboutData, setCaseAboutData] = useState([
    {
      id: 1,
      isCollapsed: true,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      isCollapsed: true,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      isCollapsed: true,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      isCollapsed: true,
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
      para1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const getSubscriptionPlans = async () => {
    const response = await axios.get(`${baseUrl}/api/plan`);
    setSubscriptionType(response.data.data);
  };

  useEffect(() => {
    setIsApiCall(true);
    getSubscriptionPlans().then(() => setIsApiCall(false));
  }, []);
  const history = useHistory();
  // Remove
  // let subscriptionType = [
  //   {
  //     name: "Bronze",
  //     price: 99,
  //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
  //     info: "For teams who add less than 100 clips/month* across their brands or clients",
  //   },
  //   {
  //     name: "Bronze Plus",
  //     price: 105,
  //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
  //     info: "For teams who add less than 100 clips/month* across their brands or clients",
  //   },
  //   {
  //     name: "Silver",
  //     price: 105,
  //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
  //     info: "For teams who add less than 100 clips/month* across their brands or clients",
  //   },
  //   {
  //     name: "Gold",
  //     price: 105,
  //     features: ["Unlimited Book", "Unlimited Clients/Brands", "Up to 5 Users"],
  //     info: "For teams who add less than 100 clips/month* across their brands or clients",
  //   },
  // ];

  // let caseAboutData = [
  //   {
  //     id: 1,
  //     isCollapsed: true,
  //     heading:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  //     para1:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     para2:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     id: 2,
  //     isCollapsed: true,
  //     heading:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  //     para1:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     para2:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     id: 3,
  //     isCollapsed: true,
  //     heading:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  //     para1:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     para2:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  //   {
  //     id: 4,
  //     isCollapsed: true,
  //     heading:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  //     para1:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     para2:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   },
  // ];

  return (
    <>
      <section className="section-1 sec-1-image-before">
        <div className="design">
          <span className="design-star p-abs">
            <img alt="" src="assets/design-star.png" />
          </span>
          <span className="design-circle p-abs">
            <img alt="" src="assets/circle-transparent.png" />
          </span>
          <span className="design-triangle guide-triangle p-abs">
            <img alt="" src="assets/triangle.png" />
          </span>
          <div className="container-1200">
            <div className="sec-1-text">
              <h1>
                Simple{" "}
                <span className="font-weight font-curve">, flexible plans</span>
              </h1>
            </div>
          </div>
          <span className="design-triangle _right d-none p-abs">
            <img alt="" src="assets/design-star.png" />
          </span>
          <span className="circle-gradient guide-top-circle p-abs">
            <img alt="" src="assets/circle-gradient.png" />
          </span>
        </div>
      </section>

      <section className="section-pricings">
        <div className="container-1200">
          <div className="row">
            {isApiCall
              ? // <h1>LOADING.....</h1>
                //   <Skeleton
                //   containerClassName="books-skeleton"
                //   className="books-skeleton"
                //   highlightColor="#ffffff"
                //   baseColor="#ede7ff"
                //   height="100%"
                // />
                [1, 2, 3, 4].map((item, i) => {
                  return (
                    <div key={i} className="col-lg-3 col-md-6">
                      <div className="border-pricing">
                        <div className="card-pricing-main">
                          <div className="for-btn-bottom">
                            <div className="card-pricing-header">
                              <h3>
                                <Skeleton
                                  // style={{ width: "250px" }}
                                  highlightColor="#ffffff"
                                  baseColor="#dddddd"
                                  className="skeleton-pkg-title"
                                  count={10}
                                />
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : subscriptionType.map((item, i) => {
                  console.log(item);

                  if (item.plan_id === 1) {
                    return;
                  }

                  return (
                    <div key={i} className="col-lg-3 col-md-6">
                      <div className="border-pricing">
                        <div className="card-pricing-main">
                          <div className="for-btn-bottom">
                            <div className="card-pricing-header">
                              <h3>{item.plan_title}</h3>
                              <p>
                                ${item.plan_price}/Month<span>USD</span>
                              </p>
                            </div>
                            <div className="card-pricing-center">
                              <ul>
                                {JSON.parse(item.plan_points).map(
                                  (item, index) => {
                                    return <li key={index}>{item}</li>;
                                  }
                                )}
                              </ul>
                              <p>{item.plan_description}</p>
                            </div>
                          </div>
                          <div className="card-pricing-button">
                            <button
                              className="btn-reg no-delay"
                              onClick={() =>
                                (window.location.href = frontEndBaseUrl)
                              }
                            >
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>

      <section className="section-pricings-2">
        <span className="triangle _4"></span>
        <span className="star _4"></span>
        <span className="gradient _4"></span>
        <span className="star _3 _pricing"></span>
        <div className="animated-circle">
          <img alt="" src="assets/circle-bg.png" />
          <span className="gradient"></span>
        </div>
        <div className="container-1200">
          <div className="text-pricing">
            <p>
              All prices shown are excluding VAT and are subject to the
              prevailing rate. *Usage is calculated on an average monthly basis.
              We won’t lock you out if you absolutely nail it one month.
            </p>
          </div>
          <div className="sec-1-text pricing-changes">
            <h1>
              What we<span className="font-weight"> care about... </span>
            </h1>
          </div>
          <div className="accordions-parent">
            <div id="accordion">
              {caseAboutData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`card ${item.isCollapsed && "collapsed"}`}
                  >
                    <div
                      onClick={() => {
                        console.log("hit");
                        let temp_data = [...caseAboutData];
                        let updatedIndex = temp_data.findIndex(
                          (data) => data.id === item.id
                        );
                        console.log(temp_data[updatedIndex].isCollapsed);
                        let newData = {
                          ...temp_data[updatedIndex],
                          isCollapsed: temp_data[updatedIndex].isCollapsed
                            ? false
                            : true,
                        };
                        console.log(newData);
                        temp_data[updatedIndex] = { ...newData };
                        // temp_data.filter((x,i) => {
                        //   return x[i].id !== current;
                        // });
                        console.log(temp_data);
                        // caseAboutData = [...temp_data];
                        setCaseAboutData(temp_data);
                      }}
                      className={`card-header ${
                        item.isCollapsed && "collapsed"
                      }`}
                      id={`headingOne${item.id}`}
                      data-toggle="collapse"
                      data-target={`#collapseOne${item.id}`}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h3>{item.heading}</h3>
                    </div>

                    <div
                      id={`collapseOne${item.id}`}
                      className={`collapse`}
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.para1}</p>
                        <br />
                        <p>{item.para2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="card">
                <div
                  className="card-header collapsed"
                  id="headingtwo"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </h3>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="card">
                <div
                  className="card-header collapsed"
                  id="headingthree"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </h3>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="card">
                <div
                  className="card-header collapsed"
                  id="headingfour"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </h3>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
              </div> */}

              {/* <div className="card">
                <div
                  className="card-header collapsed"
                  id="headingFive"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </h3>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="animated-circle _2">
          <img alt="" src="assets/circle-bg.png" />
          <span className="gradient"></span>
        </div>
      </section>
    </>
  );
};

export default Pricing;
