import React from 'react';
import Navigation from './Navigation';

function Resume(){
    return(
        <div>
            <Navigation/>
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl py-24 font-bold pl-10 text-justify'> My Resume </h1>
                
            </div>
            <div className ='flex justify-center'>
                <p className ='pt-24 text-xl'>Currently building... come back in a week!</p>
            </div>
        </div>
    )
}

export default Resume;
