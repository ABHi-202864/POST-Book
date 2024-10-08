import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h2 className="text-center mb-5">People</h2>
        <div className="col-6 mt-5 text-center p-5">
          <img src="assets/nithinKamath.jpg" style={{ borderRadius: "50%", width: "70%" }} />
          <h4 className="mt-5" style={{ color: "#7b7b7b" }}>Nithin Kamath</h4>
          <h6 style={{ color: "#7b7b7b" }}>Founder, CEO</h6>
        </div>
        <div className="col-6 mt-5 p-5">
          <p className="mt-5" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p className="mt-5" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p className="mt-5" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>Playing basketball is his zen.</p>
          <p style={{ color: "#7b7b7b" }}>Connect on <a href="https://nithinkamath.me/" style={{ textDecoration: "none" }} target="_blank">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary" style={{ textDecoration: "none" }} target="_blank">TradingQnA</a> / <a href="https://x.com/Nithin0dha" style={{ textDecoration: "none" }} target="_blank">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team;