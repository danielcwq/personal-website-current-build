import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom'
import content from '../content';

function Blog(){
    return(
        <div class = "font-dosis">
            <div className = ''>
                <Navigation />
            </div>
            <div className = 'flex justify-center'>
                <h1 className = 'text-4xl pt-24 mt-2 font-bold '> My Blog </h1>
            </div>
            <div className = 'flex justify-center'>
                <h1 className = 'text-2xl  pt-6 md:pt-12 font-medium '> Monthly Newsletters </h1>
            </div>
            <div className = 'grid grid-cols-1 gap-2 md:grid-cols-3 justify-between font-dosis mx-auto'>
                <div>
                    <a className = '' href = 'https://danielching.substack.com/p/september-newsletter-living-the-deep' target = '_blank'>
                                    <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                                        <div className = 'flex justify-center items-center'>
                                            <div className = 'font-semibold text-lg'>September</div>
                                            <div className = 'hidden md:block ml-4'>Oct 5 2021</div>

                                        </div>
                                       
                                    </div>
                    </a>
                </div>
                <div>
                            <a className = '' href = 'https://danielching.substack.com/p/october-newsletter-normalising-failure' target = '_blank'>
                            <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                                <div className = 'flex justify-center items-center'>
                                    <div className = 'font-semibold text-lg'>October </div>
                                    <div className = 'hidden md:block pl-4'>Oct 30 2021</div>

                                </div>
                            </div>
                        </a>
                </div>
                <div>
                        <a className = '' href = 'https://danielching.substack.com/p/november-newsletter-the-power-of' target = '_blank'>
                            <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                                <div className = 'flex justify-center items-center'>
                                    <div className = 'font-semibold text-lg'>November</div>
                                    <div className = 'hidden md:block pl-4'>Nov 30 2021</div>

                                </div>
                                    
                            </div>
                        </a>
                </div>
                <div>    
                    <a className = '' href = 'https://danielching.substack.com/p/december-newsletter-reflections' target = '_blank'>
                        <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>December</div>
                                <div className = 'hidden md:block pl-4'>Dec 31 2021</div>

                            </div>
                                
                        </div>
                    </a>
                </div>
                <div>    
                    <a className = '' href = 'https://danielching.substack.com/p/january-newsletter-the-power-of-belief' target = '_blank'>
                        <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>January </div>
                                <div className = 'hidden md:block pl-4'>Feb 4 2022</div>

                            </div>
                                
                        </div>
                    </a>
                </div>
                <div>    
                    <a className = '' href = 'https://danielching.substack.com/p/february-newsletter-staying-on-track' target = '_blank'>
                        <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>February </div>
                                <div className = 'hidden md:block pl-4'>March 4 2022</div>
                            </div>  
                        </div>
                    </a>
                </div>
                <div>    
                    <a className = '' href = 'https://danielching.substack.com/p/march-and-april-newsletter' target = '_blank'>
                        <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>March and April </div>
                                <div className = 'hidden md:block pl-4'>May 12 2022</div>
                            </div>  
                        </div>
                    </a>
                </div>
                <div>    
                    <a className = '' href = 'https://danielching.substack.com/p/2022-wrapped' target = '_blank'>
                        <div className = 'flex flex-col flex-grow-0 font-dosis w-3/5 md:rounded-xl mt-10 p-4 ml-24 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>2022 Wrapped</div>
                            </div>  
                        </div>
                    </a>
                </div>
                    
            </div>
            <div className = 'flex flex-col md:flex-row justify-between'>
                <div className = 'm-4 md:ml-12'>
                    <div className = 'flex justify-center '>
                        <h1 className = 'text-2xl  pt-6 md:pt-12  italic text-justify'> Technical Pieces </h1>
                    </div>
                    <a className = '' href = '' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 w-3/5 md:w-full rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400'>
                                <div className = 'flex justify-center items-center'>
                                    <div className = 'font-semibold text-lg'>Predicting Medical Specialities using ULMFiT</div>
                                    <div className = 'hidden md:block pl-4'>February 10 2022</div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p> A complete tutorial to predicting medical specialties from patients' transcripts using ULMFiT</p>
                                </div>
                                    
                            </div>
                        </a>
                    <a className = '' href = 'https://towardsdatascience.com/multi-category-classification-of-various-chest-conditions-from-chest-x-rays-1d6428522997' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 w-3/5 md:w-full rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                                <div className = 'flex justify-center items-center'>
                                    <div className = 'font-semibold text-lg'>Multi-classification of chest conditions from CXRs</div>
                                    <div className = 'hidden md:block pl-4'>December 23 2021</div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p> Using fast.ai and the NIH CXR Dataset to classify x-rays into various chest conditions</p>
                                </div>
                                    
                            </div>
                        </a>
                    <a className = '' href = 'https://danielching.medium.com/under-the-hood-how-do-neural-networks-really-work-7b48b171dc8c#71eb' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 w-3/5 md:w-full rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                                <div className = 'flex justify-center items-center'>
                                    <div className = 'font-semibold text-lg'>Under the hood — how do neural networks really work?</div>
                                    <div className = 'hidden md:block pl-4'> November 30 2021 </div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p>Understanding how binary classification works using the MNIST dataset. </p>
                                </div>
                                    
                            </div>
                        </a>
                    <a className = '' href = 'https://studentsxstudents.com/a-teenagers-foray-into-the-world-of-artificial-intelligence-868e5145ab92' target = '_blank'>
                            <div className = 'flex justify-center flex-col flex-grow-0 w-3/5 md:w-full rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                                <div className = 'flex justify-center'>
                                    <div className = 'font-semibold text-lg'>A teenager's foray into artificial intelligence 🔍</div>
                                    <div className = 'hidden md:block pl-4'> November 14 2021 </div>

                                </div>
                                <div className = 'pt-4 md:pt-6'>
                                    <p>Deep learning is for everyone.</p>
                                    <p> Skills needed to learn, build, and ship ML models taught from a top-down approach to AI.</p>
                                </div>
                                    
                            </div>
                        </a>
                </div>

                <div className = 'm-4 md:ml-12'>
                    <div className = 'flex justify-center '>
                        <h1 className = 'text-2xl md:pt-12 italic text-justify'> Personal Pieces </h1>
                    </div>
                    <a className = '' href = 'https://danielching.notion.site/On-faith-as-a-JC-student-425147eec72748d280659972b7429219' target = '_blank'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>On Faith as a JC Student</div>
                                <div className = 'hidden md:block pl-4'>Last updated: March 9, 2023</div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>My thoughts on my Christian faith, in Junior College. (HS Junior/ Senior)</p>
                            </div>
                        </div>
                    </a>
                    <a className = '' href = 'https://medium.com/p/d48eb9ef54a0' target = '_blank'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>Surviving JC: Mindsets to Tide You Through</div>
                                <div className = 'hidden md:block pl-4'>January 19 2023</div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>Three principles to help anyone get through JC: practice intentionality, have perspective and find a deep community to stay grounded. </p>
                            </div>
                        </div>
                    </a>
                    <a className = '' href = 'https://danielching.medium.com/how-to-get-good-at-2-4km-a-comprehensive-guide-85e9669ee19c' target = '_blank'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>How to get good at 2.4km 🏃</div>
                                <div className = 'hidden md:block pl-4'>December 15 2021</div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>A comprehensive training guide - mainly for students or NSMen. </p>
                                <p></p>
                            </div>
                                
                        </div>
                    </a>

                    <a className = '' href = 'https://medium.com/educere/the-power-of-range-6bcadb3980fb' target = '_blank'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'flex justify-center'>
                                <div className = 'font-semibold text-lg'>The Power of Range 📍</div>
                                <div className = 'hidden md:block pl-4'> December 4 2021 </div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>A discussion on how education systems affect the development of students' interests. </p>
                                <p></p>
                            </div>
                                
                        </div>
                    </a>

                    <a className = '' href = 'https://studentsxstudents.com/the-importance-of-deep-work-and-time-blocking-part-2-6466e5c90e79' target = '_blank'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'flex justify-center items-center'>
                                <div className = 'font-semibold text-lg'>The Importance of Deep Work and Time Block Planning (Part 2) </div>
                                <div className = 'hidden md:block pl-4'> October 27 2021 </div>
                            </div>
                            <div className = 'pt-4 md:pt-6'>
                                <p>Do deep work and time block your entire working time. </p>
                                <p>I share tips on how to time block as a student in a step by step manner, with useful links.</p>
                            </div>
                                
                        </div>
                    </a>
                    
                    <Link className = 'flex justify-center' to ='/blog/deep-work'>
                    <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'font-semibold'>The Importance of Deep Work and Time Block Planning (Part 1) </div>
                            <div className = 'hidden md:block pl-4'> October 19 2021 </div>
                        </div>
                    </Link>
                    <Link className = 'flex justify-center' to = '/blog/the-deep-life'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'font-semibold'>Living the Deep Life as a Student in Singapore  </div>
                            <div className = 'hidden md:block'> October 6 2021 </div>
                        </div>
                        
                    </Link>
                    <Link className = 'flex justify-center' to ='/blog/revision-techniques'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'font-semibold'>{content.blog1.title}</div>
                            <div className = 'hidden md:block'> July 5 2021 </div>
                        </div>  
                    </Link>
                    <Link className = 'flex justify-center' to ='/blog/perspectives'>
                        <div className = 'flex justify-center flex-col w-3/5 md:w-4/5 rounded-xl mx-auto p-4 bg-gray-200 hover:bg-gray-400 mt-4'>
                            <div className = 'font-semibold'>{content.blog3.title}</div>
                            <div className = 'hidden md:block'> Aug 2 2021 </div>
                        </div>  

                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default Blog;