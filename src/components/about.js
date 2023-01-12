import React from "react";
import content from "../content";
import {Link} from 'react-router-dom';
import Navigation from "./Navigation";

export default function About() {
    return (
        <div
      className="font-dosis"
      id="stack"
      style = {{
          background: '#eee',
      }}
    >
            <div>
                <Navigation />
                <h1 className="text-5xl flex justify-center md:pt-24 font-bold">About</h1>
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
            </div>
        </div>
      
    );
}