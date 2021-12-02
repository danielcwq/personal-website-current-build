import React from 'react';
import content from '../content';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

const styles = {
    line: {
        width: '5vw',
        height: '1px',
        backgroundColor: '#C4C4C4',},
    navWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
}
function Line() {
    return(
        <div style={styles.line}></div>
    );
}


export default function Navigation(){
    return(
        <Fade>
            
            <div className = 'visibile'>
                <div className = 'flex items-center fixed z-10 w-full mx-auto bg-gray-200 md:py-2'>
                        <Link 
                        to = '/'
                        className = 'text-xl font-dosis md:text-3xl font-bold text-black mx-auto md:ml-10 ml-3'>
                        {content.nav.logo}
                        </Link>

                        <div className = 'ml-4 border-2  md:border-4 rounded-full border-gray-200 p-2 group  md:max-w-xl'>
                            <Link to = "/blog" className ='text-lg font-dosis md:text-xl text-black'>
                                {content.nav.blogText}
                            </Link>
                        </div>
                        <div className = 'ml-4 border-2 md:border-4 md:mr-6 rounded-full border-gray-200 p-2 group'>
                            <Link to ='/resume' className = 'text-lg font-dosis md:text-xl text-black'>
                                {content.nav.resumeText}
                            </Link>
                        </div>
                        <div className = 'ml-4 border-1 md:border-2 md:mr-10 rounded-full border-black-300 p-2 group hover:shadow-lg hover:border-gray-500'>
                                <Link 
                                className = 'text-lg font-dosis text-black md:text-xl'
                                to = "/contact"
                                >
                                    {content.nav.contactText}
                                </Link>
                                
                        </div>
                        
                </div>

            </div>
            <div className = 'invisible'>
                <div className = 'fixed w-full mx-auto bg-gray-200 md:py-2'>
                    <Link 
                        to = '/'
                        className = 'flex justify-center text-xl font-dosis md:text-3xl font-bold text-black mx-auto md:ml-10 ml-3'>
                        {content.nav.logo}
                    </Link>
                    <div style={styles.navWrapper} className = 'font-dosis text-xl'>
                        <ScrollLink
                            className = 'p-2'
                            smooth = {true}
                            duration = {500}
                            to = "header"
                        >
                            Me
                        </ScrollLink>
                        <Line/>
                        <ScrollLink 
                            className = 'p-2'
                            smooth = {true}
                            duration = {500}
                            to = 'stack'
                        >
                            About
                        </ScrollLink>
                        <Line/>
                        <ScrollLink
                            smooth = {true}
                            duration = {500}
                            to = 'Contact'
                        >
                            Contact
                        </ScrollLink>

                    </div>
                </div>

            </div>
                
            
        </Fade>
    )
}