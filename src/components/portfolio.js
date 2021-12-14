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
            <div className = 'flex justify-center'>
                <h2 className = 'text-xl pt-10 md:pt-16 mt-2 pl-10 text-justify font-dosis'> Currently building... check back later! </h2>
            </div>
        </div>
    )
}

export default Portfolio;
