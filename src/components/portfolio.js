import React from 'react';
import Navigation from './Navigation';
import content from '../content';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">Figma</div>,
    <div className="item" data-value="2">ReactJS</div>,
    <div className="item" data-value="3">Fast.ai</div>,
    <div className="item" data-value="4">Tailwind.css</div>,
    <div className="item" data-value="5">PyTorch</div>,
    <div className="item" data-value="6">Python</div>,
    <div className="item" data-value="7">JavaScript</div>
    
];

const Carousel = () => (
    <AliceCarousel
    autoPlay
    autoPlayStrategy="default"
    autoPlayInterval={0}
    animationDuration={4000}
    animationEasingFunction="linear"
    animationType="slide"
    infinite
    touchTracking={true}
    disableDotsControls
    disableButtonsControls
    items={items}
    responsive={responsive}

    />
);

function Portfolio(){
    return(
        
        <div>
            <Navigation/>
            <div className = 'flex justify-center'>
                <h1 className = 'text-3xl pt-24 mt-2 font-bold pl-10 text-justify font-dosis'> Tools </h1>
            </div>
            <div className = 'px-6 md:px-12'>
                <div className = 'mx-4 text-2xl md:mx-16 md:my-4 font-dosis'>
                    <Carousel/>
                </div> 
            </div>
             
            <div className = 'flex justify-center'>
                <h1 className = 'text-3xl pt-10 md:pt-16 mt-2 font-bold pl-10 text-justify font-dosis'> Projects </h1>
            </div>
            <div style = {{minHeight: "50vh"}} className = 'w-4/5 md:w-1/3 mx-auto rounded-xl md:rounded-lg bg-indigo-900 hover:bg-blue-700'>
                
                <div className = 'm-8 p-6 md:rounded-xl text-white font-dosis'>
                    <img src='./chestxr.png'/>
                    <div className = "text-2xl font-semibold my-5 text-center ">
                        Multicategorical Classification of Chest Conditions
                    </div>
                    <div className = 'text-xl text-justify my-4'>
                    I built an end-to-end multi-categorical classifier that is able to recognise 15 different chest conditions and return relative confidence levels. 
                    </div>
                    <div className = 'text-xl text-justify'>
                    For this project, I used the fast.ai library in PyTorch and the NIH Chest X-Ray Sample dataset from Kaggle, achieving an accuracy of 92.8% using CNNs for this computer vision task.
                    </div>
                    <div className = 'flex flex-row justify-around mt-4'>
                        <a href = 'https://danielching.medium.com/multi-category-classification-of-various-chest-conditions-from-chest-x-rays-1d6428522997'class = 'rounded-lg bg-white text-black p-4'>
                            Article
                        </a>
                        <a href = 'https://colab.research.google.com/drive/182vjivfl0LgJTYaofnBiY8FebNMsSyCG' className = 'rounded-lg bg-white text-black p-4'>
                            Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
