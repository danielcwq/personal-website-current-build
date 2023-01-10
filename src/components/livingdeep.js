import React from 'react';
import Navigation from './Navigation'
import {Link} from 'react-router-dom';
import content from '../content';

function LivingDeep(){
    return (
        <div>
            <Navigation />
            <div className = 'flex justify-center'>
                <h1 className = 'text-2xl font-extrabold pt-24 pl-10'> Check back in a weeks' time!! </h1>
            </div>
        </div>
    )
}
export default LivingDeep;