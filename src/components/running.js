import React from 'react';
import Navigation from './Navigation'
import Header from './Header'
import Stack from './Stack'
import Contact from './contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import ImageSlider from './slideshow';
import {SliderData} from './SliderData'
import './SlideshowStyles.css'



function Running() {
    return(
        <div>
            <Navigation/>
            <div className = "flex justify-center">
                <h1 className = 'text-4xl p-24 font-bold font-dosis'>
                    Running as a student athlete
                </h1>
                
            </div>
            <div className = "py-20">
                <ImageSlider slides = {SliderData}/>
            </div>
            <div className = 'pb-12'>

            </div>
            <div className = "flex justify-center items-center">

           
                <div className = "bg-gray-200 py-12 md:w-4/5 md:rounded-lg shadow-2xl px-12">
                    <div className = "w-11/12 md:max-w-xl mx-auto text-xl text-center font-dosis font-extrabold text-justify mt-4 flex items-center justify-around">
                        <h2 className = "text-3xl"> 
                        Personal Bests
                        </h2>
                    </div>
                    <div className = "text-center font-dosis">
                        400m - 56 seconds [2019]
                    </div>
                    <div className = "text-center font-dosis">
                        800m - 2 minutes 12 seconds [2019]
                    </div>
                    <div className = "text-center font-dosis">
                        1000m - 3 minutes (flat) [2019]
                    </div>
                    <div className = "text-center font-dosis">
                        1500m - 5 minutes (flat) [2019]
                    </div>
                    <div className = "text-center font-dosis">
                        2400m - 8 minutes 38 seconds [2019]
                    </div>
                    <div className = "text-center font-dosis">
                        5000m - 19 minutes 42 seconds [2020]
                    </div>
                </div>

                
            </div>
            <div className = "py-12"></div>
            
            <div className = "flex justify-center">
                <div className = "bg-gray-200 py-12 md:w-4/5 md:rounded-lg shadow-2xl px-12 ">
            
                    <div className = "flex justify-center pt-20">
                            <div className = "w-11/12 md:max-w-xl mx-auto text-2xl text-center font-dosis font-extrabold text-justify mt-4 flex items-center justify-around">
                                <h2 className>
                                    My thoughts on running 🏃
                                </h2>
                            </div>
                            
                    </div>
                    <h2 className = "text-center font-dosis text-xl font-bold pt-3">
                                How Do I Get Faster? 
                    </h2>
                    <div className = "text-center font-dosis py-3">
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40">
                        That’s such a common question that is asked by many teens who are new to the sport of running. Running, and running fast is much more nuanced than you think it actually is. 
                        </p>
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40"> 
                        The correct question to ask is - Why do I run?
                        </p>
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40">
                        For me, I run because I love the sport, and I love the feeling of remaining aerobically fit. There is a special kind of solitude for me to disconnect from my work, from the fast tempo (pun intended) of day to day student life. Keeping myself fit is not just for fitness tests, rather, it has become a way of life. 
                        </p>
                    </div>
                </div>
            </div>
            <div className = 'flex justify-center pt-12'>
                <hr  className = "w-11/12"style={{
                        display: 'flex',
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
            </div>
            <div className>
                <h2 className = 'w-11/12 md:max-w-xl mx-auto text-2xl text-center font-dosis font-extrabold text-justify mt-4 flex items-center justify-around'>
                    Running Shoe Rotation
                </h2>
                <div className = "flex justify-center">
                    <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40 text-center">
                        Stay tuned to find out more! 
                    </p>
                </div>
                
            </div>
            
        </div>
    )
}
export default Running;