import React from 'react';
import content from '../content';
import {Link as ScrollLink} from 'react-scroll';

export default function Navigation(){
    return(
        <div style ={{
            background: '#091c29'
        }}>
            <div className = ' flex items-center justify-between w-10/12 ml-8 mt-2 text-white font-dosis fixed'>
                <h1 className = 'text-3xl font-bold text-black'>{content.nav.logo}<span className = 'w-3 h-3 bg-red-500 inline-block rounded-full'></span></h1>
                <div>
                    <ScrollLink to='Contact' smooth = {true}>
                        <button className ='bg-indigo-500 px-10 py-3 text-xl uppercase rounded-lg' >{content.nav.contactText}</button>
                    </ScrollLink>
                    
                </div>
            </div>
        </div>
    )
}