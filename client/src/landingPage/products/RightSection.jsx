import React from "react";

const RightSection = ({ imageUrl, title, des, learnMore }) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 pt-5 mt-5">
          <h1 className="text-muted mt-5">{title}</h1>
          <p className="text-muted" style={{ lineHeight: "1.8rem", fontSize: "1.3rem" }}>{des}</p>
          <div className="mt-3">
            <a href={learnMore} style={{ marginLeft: "1rem", fontSize: "1rem", fontWeight: "500", textDecoration: "none" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  )
}

export default RightSection;