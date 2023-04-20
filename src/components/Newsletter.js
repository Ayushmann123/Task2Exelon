import React from "react";
import "../Css/Newsletter.css";
const Newsletter = () => {
  return (
    <div className="both-sides">



      <div className="left">
        <div className="row1">
          <h1 className="leftheading">Download</h1>
        </div>

        <div className="row2">
          <p className="text">
            In web3, artists are taking back ownership and control over their
            <br /> creativity.All collection on crypter are creater-owned smart
            <br /> contracts that will stand the test of time
          </p>
        </div>

        <div className="row3">
            <button className="b1">Apple Store</button>

            <button className="b2"> Google Play</button>
        </div>
      </div>



      <div className="right">
        <div className="rowright1">
          <h1 className="rightheading">Newsletter</h1>
        </div>

        <div className="rowright2">
          <p className="row2text">Get the latest crypter updates</p>
        </div>

        <div className="rowright3">
          <form className="form">
            <label className="label">
             
              <input placeholder="Name" type="text" className="input" name="name" />
            </label>

            <label className="label">
              
              <input placeholder="Email" className="input" type="text" name="name" />
            </label>
          </form>
        </div>

        <div className="rowright4">
          <button className="subscribe-btn">subscribe now</button>
        </div>
      </div>




    </div>
  );
};

export default Newsletter;
