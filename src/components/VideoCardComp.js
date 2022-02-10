import React from "react";

const VideoCardComp = ({data}) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 pr-0">
        <div className="card-guide">
          <div className="video-area">
            <iframe
              className="video-coverage"
              src={data.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-guide-main-area">
            <h4>{data.title}</h4>
            <p>{data.decrptn}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCardComp;
