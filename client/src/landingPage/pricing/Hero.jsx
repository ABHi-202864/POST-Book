

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center" >
        <h1 className="text-muted mt-5">Pricing</h1>
        <h4 className="text-muted mt-3 mb-5">Free equity investments and flat ₹20 traday F&O trades</h4>
      </div>
      <div className="row text-center mt-5">
        <div className="col-4 p-5">
          <img src="assets/pricingEquity.svg" />
          <h3 className="text-muted">Free equity delivery</h3>
          <p className="text-muted mt-3" style={{ fontSize: "1.2rem" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
          <img src="assets/intradayTrades.svg" />
          <h3 className="text-muted">Intraday and F&O trades</h3>
          <p className="text-muted mt-3" style={{ fontSize: "1.2rem" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
          <img src="assets/pricingEquity.svg" />
          <h3 className="text-muted">Free direct MF</h3>
          <p className="text-muted mt-3" style={{ fontSize: "1.2rem" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;