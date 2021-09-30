import React from 'react';
import Navigation from './Navigation'
import Header from './Header'
import Stack from './Stack'
import Contact from './contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <Head>
                <meta property="og:title" content="Daniel Ching" />
                <meta property="og:description" content="RISE Finalist | Paragon Fellow | TKS Innovator" />
                <meta property="og:url" content="danielching.netlify.app" />
            </Head>
            <Navigation />
            <Header />
            <Stack />
            <Contact />
        </div>
    )
    
}
