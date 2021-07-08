import React from 'react';
import content from '../content';
import {Link} from 'react-scroll';
import Fade from 'react-reveal/Fade';

const styles = {
    navWrapper: {
        
        
        
       

    },
}

export default function Navigation(){
    return(
        <Fade left duration = {1500}>
                <div style = {styles.navWrapper} className = 'flex items-center  fixed z-10 justify-between w-full mx-auto bg-gray-200'>
                    <h1 className = 'text-3xl font-bold text-black items-left ml-10'>{content.nav.logo}</h1>
                    <div className = 'text-black font-bold text-2xl mr-10'>
                        <Link 
                        className="navLink"
                        activeClass="activeLink"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        >
                            {content.nav.contactText}
                        </Link>
                    </div>
                </div>
            
        </Fade>
    )
}