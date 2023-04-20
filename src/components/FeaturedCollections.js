import React, { useState } from "react";
import note from "../imgs/note.png";
import movie from "../imgs/movie.png";
import "../Css/FeaturedCollections.css";
import w1 from "../wps/w1.jpg"
import w2 from "../wps/w2.jpg"
import w3 from "../wps/w3.jpg"
import w4 from "../wps/w4.jpg"
import w5 from "../wps/w5.jpg"
import w6 from "../wps/w6.jpg"
import w7 from "../wps/w7.jpg"
import w8 from "../wps/w8.jpg"
import w9 from "../wps/w9.jpg"
import w10 from "../wps/w10.jpg"
import w11 from "../wps/w11.jpg"
import w12 from "../wps/w12.jpg"
import w13 from "../wps/w13.jpg"
import w14 from "../wps/w14.jpg"
import w15 from "../wps/w15.jpg"
import w16 from "../wps/w16.jpg"
import w17 from "../wps/w17.webp"
import w18 from "../wps/w18.jpg"
import face from "../wps/face.webp"

const FeaturedCollections = () => {
  const [projects] = useState([
    {
      title: "Full Stack React Notes Taking App",
      img: [w1,w2,w3],
      gLink: "https://github.com/Ayushmann123/BackendNotes",
      lLink: "https://github.com/Ayushmann123/BackendNotes",
      desc: "Ridonsei",
    },
    {
        title: "Full Stack React Notes Taking App",
        img: [w4,w5,w6],
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Samtobai",
      }, {
        title: "Full Stack React Notes Taking App",
        img: [w7,w8,w9],
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Taribonsiti",
      },
      {
        title: "Full Stack React Notes Taking App",
        img: [w10,w11,w12],
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Ridonsei",
      },{
        title: "Full Stack React Notes Taking App",
        img: [w13,w14,w15],
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Samtobai",
      },{
        title: "Full Stack React Notes Taking App",
        img: [w16,w17,w18],
        gLink: "https://github.com/Ayushmann123/BackendNotes",
        lLink: "https://github.com/Ayushmann123/BackendNotes",
        desc: "Taribonsiti",
      },
     
  
  ]);

  return (
    <>

    <h1 className="heading">Featured <br/>Collections.</h1>
      <div className="outerContainer">
        {projects.map((project) => (
          <div className="container" key={project.title}>
            <div className="grid">
            <img src={project.img[0]} alt={project.title} className="image1" />
            <img src={project.img[1]} alt={project.title} className="image2" />
            <img src={project.img[2]}alt={project.title} className="image3" />

            </div>
            <div className="texts-container">
            <p className="text">{project.desc}</p>
            <p className="text2">floor price</p>
            </div>
            <div className="texts-container">
            <img src={face} alt={project.title} className="face" />

            <p className="facetext">@randomdash</p>
            <p className="texteths"></p>
            </div>
            

          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCollections;
