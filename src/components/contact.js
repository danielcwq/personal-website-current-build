import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

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
           <div className="font-dosis w-4/5 md:w-2/5 mt-5">
                <h1 className = 'text-white text-5xl font-bold'>
                    {content.contact.header}
                </h1>
                <p className = 'text-white text-2xl pb-12'>
                    {content.contact.desc2}
                </p>
                <a href = 'https://www.linkedin.com/in/daniel-ching-87455b204/' class = 'button' className = 'text-black text-2xl bg-gray-500 hover:bg-gray-700 border-8 border-gray-500 mr-8'>LinkedIn!</a>
                <a href = 'mailto:dancwq2@gmail.com?Subject=Let%27s%20Chat%21&Body=%3CShare%20a%20little%20more%20of%20yourself%20here%21%20%3A%29%3E' class = 'button' className = 'text-black text-2xl bg-gray-500 hover:bg-gray-700 border-8 border-gray-500'>Gmail!</a>
           </div>

      </div>
      
    </div>
  );
}
