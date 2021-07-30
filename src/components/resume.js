import React, {useState} from 'react';
import Navigation from './Navigation';
import {Viewer} from '@react-pdf-viewer/core'
import content from '../content'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library;
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import { LazyLoadImage } from "react-lazy-load-image-component";
function Resume(){

    return(
        <div>
            <Navigation/>
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl pt-24 font-bold pl-10 text-justify'> My Resume </h1>
                
            </div>
            <div className = 'flex justify-center'>
                <LazyLoadImage
                className = 'md:max-h-7xl md:max-w-5xl md:py-1 md:px-4 md:px-40'
                src = {content.resume.img}
                >

                </LazyLoadImage>
            </div>
            
        </div>
    )
}

export default Resume;
