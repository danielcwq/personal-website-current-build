import React from 'react';
import Navigation from './Navigation'
import Header from './Header'
import Stack from './Stack'
import Contact from './contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <Navigation />
            <Header />
            <Stack />
            <Contact />
        </div>
    )
    
}
