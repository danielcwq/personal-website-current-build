import React, { useContext } from "react";
import content from "../content";
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
                  <a href = 'https://danielching.medium.com' class = 'button' className = '' target = "_blank"> 
                    <img src = './medium.png' alt = 'medium'/>
                   </a>
                 
                  
                </div>
                <div className = 'flex justify-center'>
                  <iframe src="https://danielching.substack.com/embed" width="480" height="320" className = "border solid w-4/5 md:w-full rounded-xl md:rounded-2xl" frameborder="0" scrolling="no"></iframe>
                </div>
           </div>

      </div>
      
    </div>
  );
}
