import React from "react";

const Pricing = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-6">
          <h2>Unbeatable pricing</h2>
          <p className="mt-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6">
          <img src="assets/pricing-img-for-h.png" alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  )
}

export default Pricing;