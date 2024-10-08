import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportTitel">
        <h3>Support Portal</h3>
        <a
          href=""
          style={{
            textDecoration: "underline",
            fontSize: "1.3rem",
            fontWeight: "500",
          }}
        >
          Track tickets
        </a>
      </div>
      <div className="row p-5" id="supportBottom">
        <div className="col-6 p-5">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h4>Featured</h4>
          <ol>
            <li><a href="">Surveillance measure on scrips - September 2024</a></li>
            <li><a href="">Rights Entitlements listing in September 2024</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;