import React from 'react';
import Navigation from './Navigation'
import Header from './Header'
import Stack from './Stack'
import Contact from './contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MetaTags from 'react-meta-tags';
import ImageSlider from './slideshow';
import {SliderData} from './SliderData'
import './SlideshowStyles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
};

const items = [
    <div className="item mx-8" data-value="1">
        <img src = './run-1.png'/>
    </div>,
    <div className="item mx-8" data-value="2">
        <img src = './run-2.png'/>
    </div>,
    <div className="item mx-8" data-value="3">
        <img src = './run-3.png'/>
    </div>,
    <div className="item mx-8" data-value="4">
        <img src = './run-4.png'/>
    </div>,
    <div className="item mx-8" data-value="5">
        <img src ='./run-5.jpeg'/>
    </div>,
];

const Carousel = () => (
    <AliceCarousel 
    animationEasingFunction="linear"
    animationType="slide"
    touchTracking={true}
    items={items}
    responsive={responsive}
    />
);


function Running() {
    return(
        <div>
            <div className = 'z-10 fixed'>
                <Navigation/>
            </div>
            <div>

            </div>
            <div className = "flex justify-center">
                <h1 className = 'text-4xl p-24 font-bold font-dosis'>
                    Running as a student athlete
                </h1>
                
            </div>
            <div class = 'bg-gradient-to-bl h-screen from-red-500 to-amber-500'>
                <div className=" container mx-auto my-4 px-4 py-4  h-fit z-0 w-2/3 flex bg-gray-300 rounded-2xl">
                    <Carousel/>
                </div>
            </div>
            
            
            
            <div className = 'pb-12'>

            </div>
            <div className = "flex justify-center items-center">

           
                <div className = "bg-gray-200 py-12 md:w-4/5 md:rounded-lg  px-12">
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
                        5000m - 19 minutes 42 seconds [2021]
                    </div>
                </div>

                
            </div>
            <div className = "py-12"></div>
            
            <div className = "flex justify-center mb-12">
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
                        That’s such a common question that is asked by many teens who are new to the sport of running. Running, and running fast, is much more nuanced than you think it actually is. 
                        </p>
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40"> 
                        The correct question to ask is - Why do I run?
                        </p>
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40">
                        For me, I run because I love the sport, and I love the feeling of remaining aerobically fit. There is a special kind of solitude for me to disconnect from my work, from the fast tempo (pun intended) of day to day student life. Keeping myself fit is not just for fitness tests, rather, it has become a way of life. 
                        </p>
                        <p className = "text-lg py-3 px-4 text-justify md:py-3 md:px-40">
                        Well, if you truly want to get faster (especially for 2.4km, for guys in SG), you can refer to a training plan I did up for students here. 👇 Also, if you are looking for some cheat shoes, be sure to check out the list below as well. 
                        </p>
                        <div className = 'mt-4'>
                        <a className = '' href = 'https://docs.google.com/document/d/10j1hxDBaFQIpudho5lKKlwW76UyzMpma_qj5qNQR02U/edit' target = '_blank' className = 'font-dosis font-bold w-4/5 md:w-4/5 rounded-xl mt-10 md:mt-12 shadow-md p-2 bg-gray-300 hover:bg-gray-400'>
                            How to get good at 2.4, for students 
                        </a>
                        </div>
                        <div className = 'mt-10'>
                            <a className = '' href = 'https://docs.google.com/document/d/1Iq_yL2vF2Ax9AOguGEB4v3UASjLqC329E_DI3dfH09k/edit' target = '_blank' className = 'font-dosis font-bold w-4/5 md:w-4/5 rounded-xl mt-10 md:mt-12 shadow-md p-2 bg-gray-300 hover:bg-gray-400'>
                                My Running Shoe Recommendations for 2021
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style = {{background: "#091C29", minHeight: "50vh"}} className = 'w-11/12 mx-auto md:rounded-lg'>
                
                <div className = "flex justify-center">
                    <h2 className = 'w-4/5 md:max-w-xl mx-auto text-3xl text-center font-dosis font-extrabold text-justify mt-4 flex items-center justify-around text-white'>
                        My Running Shoe Matrix 👟
                    </h2>
                    
                </div>
                <div className = "flex justify-center mt-10">
                    <p className = 'font-dosis text-white text-2xl mr-4 mt-2'> Follow me on Strava: </p>
                <a href = 'https://www.strava.com/athletes/49373732' class = 'button' target = "_blank">
                    <img src = './strava.png' alt = 'strava'/>
                  </a>
                </div>
                <div className = "flex justify-center">
                    <div 
                    className = 'grid grid-col-1 md:grid-cols-2 w-4/5 md:w-4/5 md:rounded-xl shadow-2xl font-dosis'>
                        <div className = 'm-8 p-12 md:rounded-xl' style = {{background: "#ffffff"}}>
                            <h1 className = 'flex justify-center text-2xl' > Race Day </h1>
                            <img src='./vaporfly.jpeg'/>
                            <h2 className = 'flex justify-center text-xl italic'> Nike Vaporfly Next% </h2> 
                            <p className = 'flex justify-center mt-4'> ZoomX foam with full-length carbon-fibre plate. Nike's top of the line 2019 racer. Certainly worth your buck!</p>
                        </div>
                        <div className = 'm-8 p-12 md:rounded-xl' style = {{background: "#ffffff"}}>
                            <h1 className = 'flex justify-center text-2xl' > Tempo/ Threshold Days </h1>
                            <img src='./saucony.jpeg'/>
                            <h2 className = 'flex justify-center text-xl italic'> Saucony Endorphin Speed </h2> 
                            <p className = 'flex justify-center mt-4'>PWRRUN PB Foam in the midsole, full-length nylon plate. Speedroll technology underfoot. Versatile shoe ready to tide you through those miles, awesome durability.</p>
                        </div>
                        <div className = 'm-8 p-12 md:rounded-xl' style = {{background: "#ffffff"}}>
                            <h1 className = 'flex justify-center text-2xl' > Daily Trainer/ Easy Days </h1>
                            <img src='./pegasus36.jpeg' className = 'ml-8 lg:ml-12'/>
                            <h2 className = 'flex justify-center text-xl italic'> Nike Pegasus 36 </h2>
                            <p className = 'flex justify-center mt-4'>Cushlon Foam throughout the midsole, with full-length Air Zoom pocket. Ran more than 1000km in these, still going strong for easy days.</p>
                        </div>
                        <div className = 'm-8 p-12 md:rounded-xl' style = {{background: "#ffffff"}}>
                            <h1 className = 'flex justify-center text-2xl' > Trail Running </h1>
                            <img src='./pegasus37shield.jpeg' className = 'my-8 ml-8 lg:ml-12'/>
                            <h2 className = 'flex justify-center text-xl italic'> Nike Pegasus 37 Shield </h2>
                            <p className = 'flex justify-center mt-4'> Waterproof Upper! Full length Nike React Midsole (an upgrade from the cushlon foam) with a forefoot Air Zoom pocket.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Running;