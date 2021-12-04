import React from 'react';
import Navigation from './Navigation';

import {Link} from 'react-router-dom'
import content from '../content';

function Blog(){
    return(
        <div>
            <Navigation />
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl pt-24 mt-2 font-bold pl-10 text-justify font-dosis'> My Blog </h1>
            </div>
            <div className = 'flex flex-col md:flex-row justify-between'>
                <div className = 'md:pl-12'>
                    <div className = 'flex justify-center '>
                        <h1 className = 'text-2xl  pt-6 md:pt-12  italic text-justify font-dosis '> Technical Pieces </h1>
                    </div>
                    <a className = '' href = 'https://danielching.medium.com/under-the-hood-how-do-neural-networks-really-work-7b48b171dc8c#71eb' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 ml-24 md:ml-0 md:pr-12 bg-gray-300 hover:bg-gray-400'>
                                <div className = 'flex justify-center'>
                                    <div className = 'font-semibold text-lg'>Under the hood — how do neural networks really work?</div>
                                    <div className = 'hidden md:block pl-4'> November 30 2021 </div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p>Understanding how the math behind neural networks using the MNIST dataset. </p>
                                </div>
                                    
                            </div>
                        </a>
                    <a className = '' href = 'https://studentsxstudents.com/a-teenagers-foray-into-the-world-of-artificial-intelligence-868e5145ab92' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 md:pr-12 ml-24 md:ml-0 bg-gray-300 hover:bg-gray-400'>
                                <div className = 'flex justify-center'>
                                    <div className = 'font-semibold text-lg'>A teenager's foray into artificial intelligence 🔍</div>
                                    <div className = 'hidden md:block pl-4'> November 14 2021 </div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p>Deep learning is for everyone.</p>
                                    <p> Skills needed to learn, build, and ship ML models taught from a top-down approach to AI.</p>
                                </div>
                                    
                            </div>
                        </a>
                </div>

                <div className = 'md:pr-12'>
                    <div className = 'flex justify-center '>
                        <h1 className = 'text-2xl  pt-6 md:pt-12 italic pl-10 text-justify font-dosis '> Personal Pieces </h1>
                    </div>

                    <a className = '' href = 'https://studentsxstudents.com/the-importance-of-deep-work-and-time-blocking-part-2-6466e5c90e79' target = '_blank'>
                        <div className = 'flex justify-center flex-col flex-grow-0 font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 ml-24 md:ml-0 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                            <div className = 'flex justify-center'>
                                <div className = 'font-semibold text-lg'>The Importance of Deep Work and Time Block Planning (Part 2) </div>
                                <div className = 'hidden md:block pl-4'> October 27 2021 </div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>Do deep work and time block your entire working time. </p>
                                <p>I share tips on how to time block as a student in a step by step manner, with useful links.</p>
                            </div>
                                
                        </div>
                    </a>
                    
                    <Link className = 'flex justify-center' to ='/blog/deep-work'>
                    <div className = 'flex justify-center font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                            <div className = 'font-semibold'>The Importance of Deep Work and Time Block Planning (Part 1) </div>
                            <div className = 'hidden md:block pl-4'> October 19 2021 </div>
                        </div>
                    </Link>
                    <Link className = 'flex justify-center' to = '/blog/the-deep-life'>
                        <div className = 'flex justify-center font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                            <div className = 'font-semibold'>Living the Deep Life as a Student in Singapore  </div>
                            <div className = 'hidden md:block pl-24'> October 6 2021 </div>
                        </div>
                        
                    </Link>
                    <Link className = 'flex justify-center' to ='/blog/revision-techniques'>
                        <div className = 'flex justify-center font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                            <div className = 'font-semibold'>{content.blog1.title}</div>
                            <div className = 'hidden md:block pl-24'> July 5 2021 </div>
                        </div>  
                    </Link>
                    <Link className = 'flex justify-center' to ='/blog/perspectives'>
                        <div className = 'flex justify-center font-dosis w-3/5 md:w-full rounded-xl mt-10 md:mt-12 shadow-md p-12 pr-12 bg-gray-300 hover:bg-gray-400'>
                            <div className = 'font-semibold'>{content.blog3.title}</div>
                            <div className = 'hidden md:block pl-12'> Aug 2 2021 </div>
                        </div>  

                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Blog;