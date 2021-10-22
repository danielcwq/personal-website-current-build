import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";
import contact from '../content/index.js'



export default function Contact() {
  return (
    <div
      className="min-h-screen  flex justify-center items-center"
      id="Contact"
    >
      <div
        style={{
          minHeight: "50vh",
          background: "#091C29",
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
           <div className="font-dosis w-4/5 md:w-2/5 my-5">
                <h1 className = 'text-white text-center text-5xl font-bold mb-5'>
                    {content.contact.header}
                </h1>
                <div className = "flex flex-wrap flex-shrink justify-evenly md:justify-between md:mb-12 mb-8">
                  <a href = 'https://www.linkedin.com/in/daniel-ching-87455b204/' class = 'button' className = '' target = "_blank">
                    <img src = './linkedin.png' alt = 'linkedin'/>
                  </a>
                  <a href = 'mailto:dancwq2@gmail.com?Subject=Let%27s%20Chat%21&Body=%3CShare%20a%20little%20more%20of%20yourself%20here%21%20%3A%29%3E' class = 'button' className = '' target = "_blank">
                    <img src = './gmail.png' alt = 'gmail'/>
                  </a>
                  <a href = 'https://twitter.com/danielchingwq' class = 'button' className = '' target = "_blank"> 
                    <img src = './twitter.png' alt = 'twitter'/>
                  </a>
                  <a href = 'https://dancwq2.medium.com/about' class = 'button' className = '' target = "_blank"> 
                    <img src = './medium.png' alt = 'medium'/>
                   </a>
                  
                  
                </div>
                <div className = 'ml-16 md:text-lg text-sm'>
                <a href = 'https://danielching.substack.com/p/coming-soon?r=tmemp&utm_campaign=post&utm_medium=web&utm_source=' class = 'button' className = "text-black md:text-2xl bg-gray-500 hover:bg-gray-700 border-8 border-gray-500 md:mt-8" target = "_blank"> Substack Subscription</a>
     
                </div>
           </div>

      </div>
      
    </div>
  );
}
