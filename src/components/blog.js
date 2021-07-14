import React from 'react';
import Navigation from './Navigation';

import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import content from '../content';

function Blog(){
    return(
        <div>
            <Navigation />
            <h1 className = 'py-24 pl-10'> Hello there! This page is currently under construction. Check back in a few day's time! </h1>
            <div className = 'p-6 max-w-sm bg-gray-100 rounded-xl shadow-md flex items-center space-x-2 ml-4 hover:bg-gray-300'>
                <Link className = 'py-24 pl-10' to = '/blog/revision-techniques'>
                    {content.blog1.title}
                </Link>
            </div>
            
        </div>
    )
}

export default Blog;