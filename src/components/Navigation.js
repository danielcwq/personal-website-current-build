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
                <div style = {styles.navWrapper} className = 'flex items-center  fixed z-10  w-full mx-auto bg-gray-200'>
                    <h1 className = 'text-3xl font-bold text-black items-left ml-10 '>{content.nav.logo}</h1>
                    <div className = 'ml-auto mr-10 border-4 rounded-full border-indigo-300 p-2 group hover:shadow-lg hover:border-indigo-500'>
                        <Link className ='text-xl text-black'>
                            {content.nav.sportsText}
                        </Link>
                        
                    </div>
                    <div className = 'mr-10 border-4 rounded-full border-indigo-300 p-2 group hover:shadow-lg hover:border-indigo-500'>
                            <Link 
                            className = 'text-black text-xl'
                            activeClass="activeLink"
                            to="Contact"
                            duration={500}
                            offset = {-100}
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