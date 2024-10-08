import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="p-5 mt-5 text-center" style={{ fontSize: "2rem", color: "#7b7b7b" }}>We pioneered the discount broking model in India.<br />
          Now, we are breaking ground with our technology.</h1>
      </div>
      <div className="row p-5 border-top">
        <div className="col-6">
          <p className="mt-5" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className="col-6">
          <p className="mt-5" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}><a href="https://rainmatter.com/" target="_blank" style={{ textDecoration: "none" }}>Rainmatter,</a>our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
          <p className="mt-4" style={{ fontSize: "1.1rem", color: "#7b7b7b", lineHeight: "1.8rem" }}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="https://zerodha.com/z-connect/" target="_blank" style={{ textDecoration: "none" }}>blog</a> or see what the media is saying about us.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;