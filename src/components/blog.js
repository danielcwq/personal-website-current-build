import React from 'react';
import Navigation from './Navigation';

import {Link} from 'react-router-dom'
import content from '../content';

function Blog(){
    return(
        <div>
            <Navigation />
            <h1 className = 'text-4xl pt-24 font-bold pl-10'> My Blog </h1>
            <div className = 'flex flex-column py-24'>
                <div className = 'p-2 max-w-sm bg-gray-100 rounded-xl shadow-md flex items-center space-x-2  hover:bg-gray-300'>
                    <Link className = 'py-24 pl-10' to = '/blog/revision-techniques'>
                        {content.blog1.title}
                    </Link>
                    
                </div>
                <div className = 'p-2 max-w-sm bg-gray-100 rounded-xl shadow-md flex items-center space-x-2 ml-4 hover:bg-gray-300'> 

                    <Link className = 'py-24 pl-10' to = '/blog/living-the-deep-life'>
                            {content.blog2.title}
                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Blog;