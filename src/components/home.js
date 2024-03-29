import React from 'react';
import Navigation from './Navigation'
import Header from './Header'
import Stack from './Stack'
import Contact from './contact'
import HeaderNew from './HeaderNew';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MetaTags from 'react-meta-tags';

export default function Home() {
    return(
        <div>
            <MetaTags>
                <meta id= "og-title" content = "Daniel Ching" />
                <meta id="og-description" content=" RISE Finalist | TKS Innovator | Paragon Fellow " />
                <meta id="og-url" content="danielching.netlify.app" />
            </MetaTags>
            <div className = 'md:hidden'>
                <Navigation />
            </div>
            <div class = ''>
                <div class = ''>
                    <HeaderNew />
                </div>
                
            </div>
            
        </div>
    )
    
}
