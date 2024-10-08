import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-top">
        <div className="col-8 p-5">
          <a href="" style={{ textDecoration: "none" }}><h4>Brokerage calculator</h4></a>
          <ul style={{ textAlign: "left", lineHeight: "1.8rem", marginTop: "2.5rem" }} className="text-muted">
            <li>₹100 per order for futures and options.</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>

          </ul>
        </div>
        <div className="col-4 p-5">
          <a href="" style={{ textDecoration: "none" }}><h4>List of charges</h4></a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage;