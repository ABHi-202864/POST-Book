import React from "react";

const LeftSection = ({ imageUrl, productTitel, productDes, tryDemo, learnMore, googlePlay, appStore }) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6">
          <img src={imageUrl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="text-muted">{productTitel}</h1>
          <p className="text-muted" style={{ lineHeight: "1.8rem", fontSize: "1.3rem" }}>{productDes}</p>
          <div className="mt-3">
            <a href={tryDemo} style={{ fontSize: "1rem", fontWeight: "500", textDecoration: "none" }}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "1rem", fontSize: "1rem", fontWeight: "500", textDecoration: "none" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}><img src="assets/googlePlayBadge.svg" /></a>
            <a href={appStore} style={{ marginLeft: "2rem" }}><img src="assets/appstoreBadge.svg" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection;