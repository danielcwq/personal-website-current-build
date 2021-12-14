import React, {useState} from 'react';
import content from '../content';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {IconContext} from 'react-icons';
import './navbar.css';

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

const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Blog',
        path: '/blog',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaProjectDiagram />,
        cName: 'nav-text'
      },
      
      {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
      },
      {
          title:'Resume',
          path:'/resume',
          icon: <FaIcons.FaFilePdf/>,
          cName: 'nav-text'
      }
      

]

export default function Navigation(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <Fade>
            
            <div className = 'md:visible invisible'>
                <div className = 'flex items-center fixed z-10 w-full mx-auto bg-gray-200 md:py-2'>
                        <Link 
                        to = '/'
                        className = 'text-xl font-dosis md:text-3xl font-bold text-black mx-auto md:ml-10 ml-3'>
                        {content.nav.logo}
                        </Link>
                        <div className = 'ml-4 border-2  md:border-4 rounded-full border-gray-200 p-2 group  md:max-w-xl'>
                            <Link to = "/portfolio" className ='text-lg font-dosis md:text-xl text-black'>
                                Portfolio
                            </Link>
                        </div>
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

            <div className = 'md:hidden'>
                

                    <IconContext.Provider value={{ color: '#fff' }}>
                        <div className='navbar font-dosis text-white font-bold text-center'>
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars onClick={showSidebar} />
                            </Link>
                            <div className = 'text-2xl text-center ml-32'>

                            Daniel Ching
                            </div>

                        </div>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                                </li>
                            );
                            })}
                        </ul>
                        </nav>
                    </IconContext.Provider>
                
            </div>


            
                
            
        </Fade>
    )
}