import React from 'react';
import Navigation from './Navigation';

export default function RunningRevised() {
    return(
        <div class = "font-dosis">
            <Navigation/>
            <h1 class="text-5xl flex justify-center md:pt-20 font-bold">Running</h1>
            <div class = "md:grid-rows-1 grid-cols-2">
                <div>
                    <div className = "">
                                <div className = "md:max-w-xl mx-auto text-2xl text-center">
                                    <h2 className>
                                        My thoughts on 🏃
                                    </h2>
                                </div>      
                    </div>
                    <div class="w-11/12 mx-auto pt-3 text-justify">
                        <p>
                        Running can, and should be, fun. Chances are, if you hate running, you're overexerting yourself.
                        Sometimes, it takes more discipline to slow down, because training smart is not always about pushing yourself to the limit.
                        </p>
                        <br/>
                        <p> It has been a long journey of self-discovery for me. Over the years, as I've accumulated more knowledge about how my body responds to different workouts, I've started writing 
                            tutorials and coaching others on an ad-hoc basis. (for free)
                        </p>
                        <br/>
                        <p>
                            While I'm not IAAF qualified, I've coached working professionals and JC students to help achieve PBs in their 2.4km IPPT run, as well as other events up to the 10km. 
                            I've added an article that I wrote on getting good at the 2.4km distance (top Google search result for 2.4km training plan), as well as links to Twitter threads that I've created about 
                            sports science and running. 
                        </p>
                        <br/>
                        <p>
                            Feel free to reach out to my socials if you need any help with crafting your training plans. I'm always happy to help!
                        </p>
                        <br/>
                        <div class = "grid grid-cols-2 grid-rows-1"> 
                                <div class = ''>
                                    <h1 class= 'text-2xl'>Personal Records</h1>
                                    <p className = "">
                                        400m - 56 seconds [2019]
                                    </p>
                                    <p className = "">
                                        800m - 2 minutes 12 seconds [2019]
                                    </p>
                                    <p >
                                        1000m - 3 minutes (flat) [2019]
                                    </p>
                                    <p >
                                        1500m - 5 minutes (flat) [2019]
                                    </p>
                                    <p >
                                        2400m - 8 minutes 38 seconds [2019]
                                    </p>
                                    <p >
                                        5000m - 19 minutes 42 seconds [2021]
                                    </p>
                                </div>
                                <div>
                                    <p className = 'text-2xl '> Strava: </p>
                                    <a href = 'https://www.strava.com/athletes/49373732' class = 'button' target = "_blank">
                                        <img src = './strava.png' alt = 'strava'/>
                                    </a>
                                </div>
                               
                        </div>
                        
                    </div>
                </div>
                <div class = "md:max-w-xl mx-auto text-center">
                    <h1 class='text-2xl text-center'>Resources</h1>
                    <div class="grid grid-rows-2">
                                <a href = 'https://betterhumans.pub/how-to-get-good-at-2-4km-a-comprehensive-guide-85e9669ee19c' target = '_blank' class= 'font-bold mx-auto rounded-xl md:mt-12 p-2 hover:bg-gray-400 text-center'>
                                    How to get good at 2.4 (article)
                                </a>
                                <a class ="rounded-xl mx-auto md:mt-6 p-2 hover:bg-gray-400 text-center" href="https://twitter.com/danielchingwq/status/1615374111412486147" target ='_blank'>
                                why relying too much on watch-based fitness metrics might be a bad thing (thread)
                                </a>
                    </div>
                    <div class = 'invisible md:visible'>
                        <h2 class = ' text-2xl mt-10'>What I'm doing now</h2>
                        <ul class = 'list-disc mt-5'>
                            <li>Utilising NLP to process athlete's comments post-workout, assigning true RPE values</li>
                            <li>Experimenting with HRV4Training, an app that measures heart rate variability to give training insights</li>
                            <li>Coaching 5+ mentees for IPPT</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}