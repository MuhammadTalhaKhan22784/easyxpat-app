import React from "react";

const HomeContent = (props) => {
  return (
    <React.Fragment>
      <div className="home_content_section">
        <div className="container_wraper">
          <div className={props.className}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="hc_left">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="hc_right">
                <img src={props.img} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
