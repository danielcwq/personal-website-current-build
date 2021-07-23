import React from 'react';
import content from '../content';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'


export default function Navigation(){
    return(
        <Fade>
                <div className = 'flex items-center fixed z-10 w-full mx-auto bg-gray-200'>
                    <Link 
                    to = '/'
                    className = 'text-2xl md:text-3xl font-bold text-black mx-auto md:ml-10 ml-3'>
                    {content.nav.logo}
                    </Link>

                    <div className = 'mx-4 border-2  md:border-4 rounded-full border-gray-200 p-2 group hover:shadow-lg hover:border-gray-500 md:max-w-xl'>
                        <Link to = "/blog" className ='text-lg md:text-xl text-black'>
                            {content.nav.blogText}
                        </Link>
                        
                    </div>
                    <div className = 'ml-4 border-2 md:border-4 md:mr-10 rounded-full border-gray-200 p-2 group hover:shadow-lg hover:border-gray-500'>
                            <Link 
                            className = 'text-lg text-black md:text-xl'
                            to = "/contact"
                            >
                                {content.nav.contactText}
                            </Link>
                            
                        </div>
                </div>
            
        </Fade>
    )
}