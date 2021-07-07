import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
          />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1 className="font-bond text-2xl text-gray-500">
            {content.header.text[2]}{" "}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
            {/* this is basically the function for the typing function */}
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
