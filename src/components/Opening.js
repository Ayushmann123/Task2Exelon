import React from "react";
import splash from "../imgs/splash.png";
import "../Css/Opening.css";

const Opening = () => {
  return (
    <>
      <div className="cont-both">
        <div className="leftside">
          <div className="topContainer">
            <div className="headingbig">
              <h1 className="headingh1">
                Leaving the <br /> Dream Behind
              </h1>
            </div>

            <div className="nowprice">By Now Price</div>

            <div className="makeoffer">
              <div className="eth">
                <h3 className="h38">8.00 ETH</h3>
              </div>
              <div className="offerbtn">
                <button className="btn">Make Offer</button>
              </div>
            </div>

            <div className="dollar">$24,235.00</div>
          </div>
        </div>

        <div className="splash">
          <img className="splashimg" src={splash} alt="" />
        </div>
      </div>
    </>
  );
};

export default Opening;
