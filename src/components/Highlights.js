import React, { useState } from "react";
import "../Css/Highlights.css";
import w5 from "../wps/w5.jpg";
import h1 from "../hps/h1.jpg";
import h2 from "../hps/h2.jpg";
import h3 from "../hps/h3.jpg";
import h4 from "../hps/h4.jpg";
import h5 from "../hps/h5.jpg";
import h6 from "../hps/h6.jpg";
import h7 from "../hps/h7.jpg";
import h8 from "../hps/h8.jpg";
import h9 from "../hps/h9.jpg";

const Highlights = () => {
  const [projects] = useState([
    {
      title: "Full Stack React Notes Taking App",
      img: h1,
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Our projeo enjoy.",
    },
    {
      title: "Full Stack React Notes Taking App",
      img: h2,
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Our projeo enjoy.",
    },
    {
      title: "Full Stack React Notes Taking App",
      img: h3,
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Our projeo enjoy.",
    },
    {
      title: "Full Stack React Notes Taking App",
      img: h4,
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Our projeo enjoy.",
    },
    {
      title: "Full Stack React Notes Taking App",
      img: h5,
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Our projeo enjoy.",
    },
    {
        title: "Full Stack React Notes Taking App",
        img: h6,
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Our projeo enjoy.",
      }, {
        title: "Full Stack React Notes Taking App",
        img: h7,
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Our projeo enjoy.",
      }, {
        title: "Full Stack React Notes Taking App",
        img: h8,
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Our projeo enjoy.",
      }, 
  ]);

  return (
    <>
      <div className="header">
        <div className="three-row-container">
          <div><h1 className="h1heading">Highlights</h1></div>
          <div><h3 className="h3heading">Project you love</h3></div>
          <div className="three-row-buttons">
            <button className="btn"> 1 Day</button>
            <button className="btn">7 Day</button>
            <button className="btn">30 Day</button>
          </div>
        </div>
        <div className="groundwork">

            <img src={h9} className="rightpic"/>
            <p className="righttext">
                We are laying the groundwork for web3- the NeXT <br/> generation of the internet full of limitless possibilities 
            </p>
        </div>
      </div>
      <div>
      <div className="cardWrapper">

        {projects.map((project) => (
              <div className="card" key={project.title}>
                <img className="img" src={project.img} alt="title" />
                <h2 className="title">The Currency</h2>
                <p className="para">buy now, <strong>12.29eth</strong></p>
              </div>
            
        ))}
        </div>
      </div>
    </>
  );
};

export default Highlights;
