

const Universe = () => {
  return (
    <div className="container">
      <div className="row text-center text-muted">
        <h1>The Zerodha Universe</h1>
        <p className="mb-5">Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3">
          <img src="assets/smallcaseLogo.png" />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="assets/zerodhaFundhouse.png" style={{ width: "50%" }} />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="assets/sensibullLogo.svg" style={{ width: "60%" }} />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/streakLogo.png" style={{ width: "50%" }} />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="https://zerodha.com/static/images/partners/tijori.svg" style={{ width: "50%" }} />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="assets/dittoLogo.png" style={{ width: "50%" }} />
          <p className="text-small">Thematic invesment platform</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{ width: "20%", margin: "0 auto" }}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Universe;