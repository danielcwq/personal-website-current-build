import React, {useContext} from 'react';
import content from "../content";
import Typical from "react-typical";
import {Link} from 'react-router-dom';
import NavigationHome from './NavigationHome';
export default function HeaderNew(){
    return(
    <div>
       <div >
        <div class = " invisible md:visible">
            <NavigationHome />
        </div>
            <div className = "flex justify-center font-dosis text-base ml-4 md:ml-0">
                    18 y/o based in 🇸🇬 ~ alum @TKS ~ 
                    ML @fast.ai ~ 👟 geek ~ ML for medicine
            </div>
       </div>
        <div className="w-full md:flex flex-row mt-4">
               <div class= "md:w-2/3">
                    <img class = "mt-2 rounded-full w-2/5 mx-auto md:mt-0" src = './mugshotfinalmin.png'></img>
                    <div className = "md:w-2/3 flex flex-wrap flex-shrink justify-evenly justify-between md:mb-4 px-10 mt-4 mx-auto">
                        <a href = 'https://www.linkedin.com/in/daniel-ching-87455b204/' class = 'button' className = 'md:px-2' target = "_blank">
                                <img src = './linkedin_m.png' alt = 'linkedin'/>
                        </a>
                        <a href = 'mailto:dancwq2@gmail.com?Subject=Let%27s%20Chat%21&Body=%3CShare%20a%20little%20more%20of%20yourself%20here%21%20%3A%29%3E' class = 'button' className = 'md:px-2' target = "_blank">
                                <img src = './gmail_m.png' alt = 'gmail'/>
                        </a>
                        <a href = 'https://twitter.com/danielchingwq' class = 'button' className = 'md:px-2' target = "_blank"> 
                                <img src = './twitter_m.png' alt = 'twitter'/>
                        </a>
                        <a href = 'https://danielching.medium.com' class = 'button' className = 'md:px-2' target = "_blank"> 
                                <img src = './medium_m.png' alt = 'medium'/>
                        </a>
                    </div>
                </div> 
            <div className="font-dosis rounded-lg ">

                <div class = "invisible md:visible grid gap-16 grid-cols-2 grid-rows-3 text-2xl md:mt-16 text-4xl gap-10">
                    <div class ="hover:font-bold">
                        <Link to = "/about">
                            About
                        </Link>
                    </div>
                    <div class ="hover:font-bold">
                        <Link to = "/contact">
                            Contact
                        </Link>
                    </div>
                    <div class ="hover:font-bold">
                        <Link to = "/portfolio">
                            Projects   
                        </Link>
                    </div>
                    <div class ="hover:font-bold">
                        <Link to = "/blog">
                            Blog
                        </Link>
                    </div>
                    <div class ="hover:font-bold">
                        <Link to = "/resume">
                            Resume
                        </Link>
                    </div>
                    <div class ="hover:font-bold">
                        <Link to = "/running">
                            Running 
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        
       

    </div>
    )
}