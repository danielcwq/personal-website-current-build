import React from "react";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Link} from 'react-router-dom'

export default function Stack() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
      style = {{
          background: '#eee',
      }}
    >
      <h1 className="text-5xl md:pt-24 font-bold">About</h1>
      <div className="flex flex-wrap justify-center mt-10 ">
      <img className = 'md:rounded-xl w-2/6 h-1/5'src = './picture2.jpg' alt = 'linkedin'/>
      </div>
      <p className="w-11/12 md:max-w-xl mx-auto text-xl text-center text-justify mt-10">
        {content.stack.desc}
      </p>
      <p className="w-11/12 md:max-w-xl mx-auto text-xl text-center text-justify mt-4">
        {content.stack.desc2}
      </p>
      <p className = "w-11/12 md:max-w-xl mx-auto text-xl text-center text-justify mt-4">
        {content.stack.desc3}
      </p>

     <div className = "flex">
        <div className = "mt-4 text-3xl font-bold text-center  group hover:shadow-lg hover:border-gray-500 rounded-full p-2 ">
            <Link to = "/running">
              {content.stack.desc4}
            </Link>
            
        </div>
        <div className = 'text-3xl invisible md:visible mt-6'>
          <p>|</p>
        </div>
        <div className = "invisible md:visible mt-4 text-3xl font-bold text-center text-justify group hover:shadow-lg hover:border-gray-500 rounded-full p-2">
          <Link to = '/blog'>
            My blog
          </Link>
        </div>
      </div>
      
    </div>
  );
}
