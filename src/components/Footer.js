import React from "react";
import "../Css/Footer.css";
const Footer = () => {
  return (
    <div className="container-both">
      <div className="boxLeft">
        <div className="digicontainer">
          <h1 className="degih1">DEGITALWOX</h1>
          <h4 className="degih4">Empower your creativity</h4>
        </div>
      </div>
      <div className="boxRight">
      

        <div className="row2">
          <div className="footer-col">
            <h3 className="colheading">Digital</h3>
            <ul>
              <li>
                <a href="#">Employer</a>
              </li>
              <li>
                <a href="#">Connect wallet</a>
              </li>
              <li>
                <a href="#">Upload</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="colheading">Info</h3>

            <ul>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="colheading">Social</h3>

            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
