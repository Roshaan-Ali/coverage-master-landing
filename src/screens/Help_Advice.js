import React from "react";
import {
  CircleGradient,
  CircleTransparent,
  DesignStar,
  Triangle,
} from "../assets";
import VideoCardComp from "../components/VideoCardComp";

const Help_Advice = () => {
  let addingCoverageData = [
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
  ];

  let understandingMetricsData = [
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
  ];

  let customizingAndEditData = [
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
    {
      video: "https://www.youtube.com/embed/rTREajQt4Is",
      title: "In-depth Guided Demo",
      decrptn:
        "A full demo of CoverageBook. Stella Bayles shows: how to add online-offline articles and social posts, what metrics are included in reports, how to customise design, how to share reports with stakeholders, how to extract insights from past campaigns.",
    },
  ];

  return (
    <>
      <section className="section-1 sec-1-image-before">
        <div className="design">
          <span className="design-star p-abs">
            <img src={DesignStar} />
          </span>
          <span className="design-circle p-abs">
            <img src={CircleTransparent} />
          </span>
          <span className="design-triangle guide-triangle p-abs">
            <img src={Triangle} />
          </span>
          <div className="container-1200">
            <div className="sec-1-text">
              <h1>
                Getting started with{" "}
                <span className="font-weight font-curve"> CoverageBook…</span>
              </h1>
            </div>
          </div>
          <span className="design-triangle _right d-none p-abs">
            <img src={DesignStar} />
          </span>
          <span className="circle-gradient guide-top-circle p-abs">
            <img src={CircleGradient} />
          </span>
        </div>
      </section>

      <section className="section-guide-2 pos-rel">
        <div className="container-1200">
          <span className="star _2"></span>
          <span className="gradient _2"></span>
          <span className="triangle _2"></span>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="card-guide">
                <div className="video-area">
                  <iframe
                    className="video-coverage"
                    src="https://www.youtube.com/embed/rTREajQt4Is"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-guide-main-area">
                  <h4>Quick Start Overview</h4>
                  <p>
                    David shows you how to create a coverage report in less than
                    a minute.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card-guide">
                <div className="video-area">
                  <iframe
                    className="video-coverage"
                    src="https://www.youtube.com/embed/rTREajQt4Is"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-guide-main-area">
                  <h4>In-depth Guided Demo</h4>
                  <p>
                    A full demo of CoverageBook. Stella Bayles shows: how to add
                    online-offline articles and social posts, what metrics are
                    included in reports, how to customise design, how to share
                    reports with stakeholders, how to extract insights from past
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-guide-3 pos-rel">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <span className="triangle _2"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="heading-huge guide-right-line">
                <span className="text-up">
                  Adding <span className="blue-black">Coverage</span>
                </span>
              </h1>
            </div>
            {addingCoverageData.map((item, i) => {
              return <VideoCardComp key={i} data={item} />;
            })}
          </div>
        </div>
        <div className="pos-rel">
          <span className="star _2"></span>
          <span className="gradient _2"></span>
          <span className="triangle _2"></span>

          <div className="container-1200">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="heading-huge guide-right-line">
                  <span className="text-up">
                    Understanding{" "}
                    <span className="blue-black"> The Metrics</span>
                  </span>
                </h1>
              </div>
              {understandingMetricsData.map((item, i) => {
                return <VideoCardComp key={i} data={item} />;
              })}
            </div>
          </div>
        </div>

        <div className="pos-rel">
          <span className="star _2"></span>
          <span className="gradient _2"></span>
          <span className="triangle _2"></span>
          <div className="container-1200">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="heading-huge guide-right-line">
                  <span className="text-up">
                    Customising{" "}
                    <span className="blue-black"> , editing & formatting </span>
                  </span>
                </h1>
              </div>
              {customizingAndEditData.map((item, i) => {
                return <VideoCardComp key={i} data={item} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-guide-3 bg-footer pos-rel">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <span className="triangle _2"></span>

        <div className="container-1200">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="heading-huge guide-right-line bg-footer">
                <span className="text-up bg-footer">
                  Adding <span className="blue-black"> Coverage</span>
                </span>
              </h1>
            </div>
            {addingCoverageData.map((item, i) => {
              return <VideoCardComp key={i} data={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Help_Advice;
