import React, { useEffect, useState } from "react";
import {
  circleBg,
  CircleGradient,
  CircleTransparent,
  DesignStar,
  SponsorFive,
  SponsorFour,
  SponsorOne,
  SponsorThree,
  SponsorTwo,
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test6,
  Test7,
  Triangle,
} from "../assets";
import Slider from "react-slick";

const WhyUs = () => {
  let whatWeWantData = {
    mainInfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    points1: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    points2: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  };

  let whatWeCareAbout = {
    mainParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
    points1: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    points2: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  };

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
      <section className="section-1 sec-1-image-before">
        <div className="design">
          <span className="design-star p-abs">
            <img alt="" src={DesignStar} />
          </span>
          <span className="design-circle p-abs">
            <img alt="" src={CircleTransparent} />
          </span>
          <span className="design-triangle guide-triangle p-abs">
            <img alt="" src={Triangle} />
          </span>
          <div className="container-1200">
            <div className="sec-1-text">
              <h1>
                Why <span className="font-weight"> Us?</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <span className="design-triangle _right d-none p-abs">
            <img alt="" src={DesignStar} />
          </span>
          <span className="circle-gradient guide-top-circle p-abs">
            <img alt="" src={CircleGradient} />
          </span>
        </div>
      </section>

      <section className="section-whyus-2">
        <span className="triangle _3"></span>
        <span className="star _3"></span>
        <span className="star _3 _bottom _left"></span>
        <span className="star _3 _bottom _right"></span>
        <span className="circle _3"></span>
        <span className="circle _3 _left"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-1-text pricing-changes why-us">
                <h1>
                  What we want{" "}
                  <span className="font-weight">
                    <br /> to change...{" "}
                  </span>
                </h1>
                <p>{whatWeWantData.mainInfo}</p>
              </div>
              <div className="ul-list">
                <ul>
                  {whatWeWantData.points1.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ul-list">
                <ul>
                  {whatWeWantData.points2.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-whyus-2 pt-0">
        <div className="animated-circle top_bottom">
          <img alt="" src={circleBg} />
          <span className="gradient"></span>
        </div>
        <span className="triangle _3"></span>
        <span className="star _3"></span>
        <span className="star _3 _bottom _left"></span>
        <span className="star _3 _bottom _right"></span>
        <span className="circle _3"></span>
        <span className="circle _3 _left"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-1-text pricing-changes why-us">
                <h1>
                  What we{" "}
                  <span className="font-weight">
                    <br /> Care About{" "}
                  </span>
                </h1>
                <p>{whatWeCareAbout.mainParagraph}</p>
              </div>
              <div className="ul-list">
                <ul>
                  {whatWeCareAbout.points1.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ul-list">
                <ul>
                  {whatWeCareAbout.points2.map((item, i) => {
                    return <li key={i}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-whyus-2 pt-0">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="image-sponsors-why-us">
              <img alt="" src={SponsorOne} />
              <img alt="" src={SponsorTwo} />
              <img alt="" src={SponsorThree} />
              <img alt="" src={SponsorFour} />
              <img alt="" src={SponsorFive} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-6">
        <div className="container-1200">
          <div className="testimages">
            {[Test1, Test2, Test3, Test4, Test5, Test6, Test7].map(
              (item, i) => {
                return (
                  <span key={i}>
                    <img alt="" src={item} />
                  </span>
                );
              }
            )}
          </div>

          <div>
            <h1 className="heading-huge text-center">
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
    </>
  );
};
export default WhyUs;
