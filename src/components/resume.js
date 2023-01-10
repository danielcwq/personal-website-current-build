import React, {useState} from 'react';
import Navigation from './Navigation';

function Resume(){

    return(
        <div>
            <Navigation/>
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl py-20 font-bold pl-10 text-justify font-dosis'> My Resume </h1>
                
            </div>
            <div className = 'flex justify-center'>
                <img
                className = 'md:max-h-7xl md:max-w-5xl md:py-1 md:px-4 md:px-40'
                src = './resume2.png'
                >

                </img>
            </div>
            
        </div>
    )
}

export default Resume;
