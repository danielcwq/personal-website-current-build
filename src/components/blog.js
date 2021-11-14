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
            
            <div className = 'flex justify-center'>
                <h1 className = 'text-2xl  pt-6 md:pt-12 italic pl-10 text-justify font-dosis '> Personal Pieces </h1>
            </div>
            <a className = 'flex justify-center' href = 'https://studentsxstudents.com/the-importance-of-deep-work-and-time-blocking-part-2-6466e5c90e79' target = '_blank'>
            <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                    <div className = 'font-semibold'>The Importance of Deep Work and Time Block Planning (Part 2) </div>
                    <div className = 'hidden md:block pl-4'> October 27 2021 </div>
                </div>
            </a>
            
            <Link className = 'flex justify-center' to ='/blog/deep-work'>
            <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                    <div className = 'font-semibold'>The Importance of Deep Work and Time Block Planning (Part 1) </div>
                    <div className = 'hidden md:block pl-4'> October 19 2021 </div>
                </div>
            </Link>
            <Link className = 'flex justify-center' to = '/blog/the-deep-life'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                    <div className = 'font-semibold'>Living the Deep Life as a Student in Singapore  </div>
                    <div className = 'hidden md:block pl-24'> October 6 2021 </div>
                </div>
                
            </Link>
            <Link className = 'flex justify-center' to ='/blog/revision-techniques'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                    <div className = 'font-semibold'>{content.blog1.title}</div>
                    <div className = 'hidden md:block pl-24'> July 5 2021 </div>
                </div>  
            </Link>
            <Link className = 'flex justify-center' to ='/blog/perspectives'>
                <div className = 'flex justify-center font-dosis w-3/5 md:w-3/5 rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                    <div className = 'font-semibold'>{content.blog3.title}</div>
                    <div className = 'hidden md:block pl-12'> Aug 2 2021 </div>
                </div>  

            </Link>
            
           
        </div>
    )
}

export default Blog;