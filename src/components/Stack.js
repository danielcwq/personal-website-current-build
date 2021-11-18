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
      <h1 className="text-5xl font-bold">About</h1>
      <div className="flex flex-wrap justify-center mt-10 ">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? "animate-float" : "animate-refloat"
              } w-40 h-40 bg-white shadow-2xl m- rounded-full flex items-center p-5`}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl mx-auto text-xl text-center text-justify mt-10">
        {content.stack.desc}
      </p>
      <p className = "w-11/12 md:max-w-xl mx-auto text-xl text-center text-justify mt-4">
        {content.stack.desc3}
      </p>

      <div className = "mt-4 text-3xl font-bold text-center text-justify w-11/12 md:max-w-xl group hover:shadow-lg hover:border-gray-500 rounded-full md:pl-24">
          <Link to = "/running">
            {content.stack.desc4}
          </Link>
      </div>
    </div>
  );
}
