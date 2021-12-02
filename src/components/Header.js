import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      id = 'header'
      style={{
        background: "#ffffff",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between flex-grow-0 ">
        <div className="w-2/5 h-2/5 md:rounded-xl">
          <LazyLoadImage
            src='./mugshot.png'
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
          />
        </div>
        <div className="text-black font-dosis text-center md:text-left bg-black h-full p-12 rounded-lg">
          <h2 className="text-3xl md:text-5xl text-white flex justify-center px-12 font-bold">
            {content.header.text[0]}
            <br />
          </h2>
          <h1 className="font-bond text-2xl text-white text-center">
            {content.header.text[1]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"/>
            {/* this is basically the function for the typing function */}
          </h1>
         
          
          <div className = "flex flex-wrap flex-shrink justify-evenly md:justify-between md:mb-4 mb-2 px-10 py-3">
            <a href = 'https://www.linkedin.com/in/daniel-ching-87455b204/' class = 'button' className = 'px-2' target = "_blank">
                    <img src = './linkedin_m.png' alt = 'linkedin'/>
                  </a>
                  <a href = 'mailto:dancwq2@gmail.com?Subject=Let%27s%20Chat%21&Body=%3CShare%20a%20little%20more%20of%20yourself%20here%21%20%3A%29%3E' class = 'button' className = 'px-2' target = "_blank">
                    <img src = './gmail_m.png' alt = 'gmail'/>
                  </a>
                  <a href = 'https://twitter.com/danielchingwq' class = 'button' className = 'px-2' target = "_blank"> 
                    <img src = './twitter_m.png' alt = 'twitter'/>
                  </a>
                  <a href = 'https://dancwq2.medium.com' class = 'button' className = 'px-2' target = "_blank"> 
                    <img src = './medium_m.png' alt = 'medium'/>
                   </a>
          </div>
        </div>
      </div>
    </div>
  );
}
