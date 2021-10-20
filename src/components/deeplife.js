import React from 'react';
import Navigation from './Navigation';
import content from '../content';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from 'react-router-dom';
import Contact from './contact'

function DeepLife(){
    return(
        <div>
            <Navigation/>
            
            <div className = 'flex flex-row leading-relaxed'>
                <div className = 'md:px-32'></div>
                <div className = 'leading-relaxed'>
                    <div className = 'flex justify-center'>
                        <h1 className = 'text-2xl font-extrabold pt-24 py-10 px-4 md:px-4'> Living the Deep Life as a Student in Singapore </h1>
                    </div>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>Living the conventional life as a student who goes to school, studies all day, and participates actively in extra-curricular activities is boring. There’s so much more to accelerating growth as a youth than attending preparatory classes or excelling in one’s academic work. Living a life with time that is intentionally spent isn’t just for adults - it’s for teenagers, too. <b className = 'text-bold'>My goal is to help you live such a life.</b></p>
                    <h3 className = "text-3xl font-bold py-1 md:px-40">
                        What will be covered in this blog 
                    </h3>
                    <ol className = 'list-inside list-decimal text-xl py-3 px-4 text-justify md:py-6 md:px-40'>
                        <li>Explaining the concept of a deep life</li>
                        <li>4 concrete action items to make changes </li>
                        <li> Brief Updates</li>
                    </ol>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                        This blog is long, but it’ll be great if you could stick with it right through the end.
                    </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    In our minds, we can possibly conjure up a faint image of what we believe a “popular” high-achieving school student to be - more than a thousand followers on Instagram or TikTok [although it seems to be less the case], a great GPA, and someone who excels in sports or music or some extra-curricular pursuit. To add icing on the cake, a leadership position as a head student councillor would be great. Ultimately, to what end would we want to pursue these goals?
                    </p>
                    
                    <div className = 'italic text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                        I used to live that life, but I slowly realised that many of these things were areas in my life that I simply didn’t care about. 
                    </div>
                    <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div  className = 'flex justify-center'>
                        <LazyLoadImage
                        className = 'h-52 w-52 md:py-1 md:px-4 md:px-40'
                        src = 'https://cdn-icons.flaticon.com/png/512/525/premium/525872.png?token=exp=1634250628~hmac=d8e9f0d24763aa6443ae6bab904195ce'/>
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                        I first came across the concept of living the deep life from renowned author Cal Newport. <b className = 'text-bold'> Living the deep life basically means spending your time intentionally on things that matter, and avoid wasting too much time on things that do not. </b> Since then, I have made several radical changes in my life to shift my attention onto specific areas of my life that I care about. In many ways, taking a step back from whatever you’re doing in the moment and analysing whether you’re spending your limited time intentionally on the things that you genuinely matter is the first step in exploring the world around you. 
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40 font-bold'>
                    Action 1: Take out a piece of writing paper and identify key areas of your life that you genuinely care about. For example, family, grades, running (physical health), and self-improvement. Beside each label, write down your quarterly (3 months), monthly and weekly goals that you want to achieve. Position this paper in a place where it is prominent, to remind yourself that you have committed to these goals and will work continuously towards it. 
                    </div>
                    <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    In an education system renowned for its rigour, a large majority of our time is spent preparing for tests, examinations and the eventual GCE ‘A’ Levels - which cap off 10 years of primary, secondary and pre-college education. Chances are, if you are reading this article, you would strive to do your best in any examinations too.
                    <Link className = 'flex justify-center' to ='/blog/revision-techniques'>
                        <div className = "flex justify-center font-dosis w-4/5 md:w-4/5 rounded-xl mt-10 md:mt-12 shadow-md p-2 bg-gray-300 hover:bg-gray-400">
                        Here are some tips on how to ace your examinations.
                        </div>
                    </Link>
                    </div>
                    <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    But a students’ life is really more than just academics - the next step would be to allocate the necessary time to the areas that you have identified above. In the frenzied tempo of school life, it is really easy for you to go with the flow, sit back, and do whatever assignment that’s due the next day. Before you realise, a school term would have flown by while you would have made only a minimal effort to work on the things that matter to you. This is why the concept of time-blocking is important.
                    </div>
                   <div className = 'text-lg py-3 px-4 text-justify font-bold md:py-6 md:px-40'>
                   Action 2: Create a rough schedule of your week on Google Calendar. Broadly identify blocks of time when you are at school, when you’re participating in your clubs, as well as any preparatory classes. To establish a routine of priming your brain for focused, uninterrupted work, identify times in the day when you know you would be studying.
                   </div>
                   <div  className = 'flex justify-center'>
                        <LazyLoadImage
                        className = 'h-52 w-52 md:py-1 md:px-4 md:px-40'
                        src = 'https://www.planninginspired.com/wp-content/uploads/2020/09/time-blocking-with-google-calendar-2-1-1024x683.png'/>
                    </div>
                   <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    In a student’s life, even if you believe that perhaps living the deep life might not suit you, the concept of doing deep, focused work is extremely critical in improving your productivity. (I would be writing on how to go about implementing these concepts on time-blocking and deep work as a student at a later date.)
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify font-bold md:py-6 md:px-40'>
                    Action 3: When the time comes, put your mobile devices away from your field of vision (preferably outside your room), and focus intensely for 30-40 minutes, and then break for 5 minutes WITHOUT looking at your phone. Iterate for 2-3 times, then take a long break.
                    </div>
                    <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    <b className = 'text-bold'>Rest and rejuvenation is key. </b> Living a deep life doesn’t mean that it has to be all work and no play. Rather, it is the converse. By spending times on things that you genuinely care about (yes, video games could be in the areas listed in #action-1), and radically eradicating other areas of your life through which unnecessary time is spent, you would be able to enjoy yourself fully, and to a greater extent than before. In their book Peak Performance, Brad Stulberg and Steve Magness explore the idea that elite performance is unsustainable without periodised breaks and relaxation. If you want to be living your best life in the most fulfilling way, the key to doing this is to include scheduled relaxation times to prevent burnout. 
                    </div>

                    <div className = 'text-lg py-3 px-4 text-justify font-bold md:py-6 md:px-40'>
                    Action 4: What are some things that you love doing? Set aside time to pursue these activities. By living in denial and reacting to urges of taking unscheduled breaks, the quality of entertainment would decrease drastically. 
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    <b className = 'underline'>Metacognition is the secret to growth and 10x acceleration. </b>Through critically examining all aspects of your life and weeding out the ones that don’t matter as much, and finding a set of practices that work the best for you, you would find life as a student much more enjoyable and manageable. Eventually, you would discover and establish a set routine in which you pursue areas of your life in a meaningful manner. 
                    </div>
                    <div className = 'text-lg py-3 px-4 text-center md:py-6 md:px-40'>
                            ----------------------------------------------------------
                    </div>
                    <div className = 'text-2xl py-3 px-4 text-justify font-bold md:py-6 md:px-40'>
                        Quick Updates
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    September was a real challenging month for me - in terms of school work (promotional examinations!) and managing exam stress. Nonetheless, I was completely blown away by the first few sessions of TKS, and had a chance to dive into the world of AI. Feel free to schedule a chat fo find out more :).
                    </div>
                    <div className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    If you liked this post, feel free to subscribe to my fortnightly (I hope) newsletters where I share tips about my experiences as a student who likes to think past the constraints of school. I would love to answer any queries that you might have about living deeply as a student :). 
                    </div>
                </div>
                <div className = 'md:px-32'></div>
            </div>
            <Contact />
            
        </div>
    )
}

export default DeepLife;