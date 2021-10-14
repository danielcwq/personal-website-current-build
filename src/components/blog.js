import React from 'react';
import Navigation from './Navigation';

import {Link} from 'react-router-dom'
import content from '../content';

function Blog(){
    return(
        <div>
            <Navigation />
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl pt-24 font-bold pl-10 text-justify font-dosis'> My Blog </h1>
            </div>
            <Link className = 'flex justify-center' to = '/blog/the-deep-life'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 bg-gray-300 hover:bg-gray-400'>
                    Living the Deep Life as a Student in Singapore 
                </div>
            </Link>
            <Link className = 'flex justify-center' to ='/blog/revision-techniques'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 bg-gray-300 hover:bg-gray-400'>
                    {content.blog1.title}
                </div>  
            </Link>
            <Link className = 'flex justify-center' to ='/blog/perspectives'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 bg-gray-300 hover:bg-gray-400'>
                    {content.blog3.title}

                </div>

            </Link>
            
           
        </div>
    )
}

export default Blog;