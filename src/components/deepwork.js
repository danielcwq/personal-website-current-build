import React from 'react';
import Navigation from './Navigation';
import content from '../content';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Link} from 'react-router-dom';

function DeepWork(){
    return(
        <div>
            <Navigation/>
            <div className = 'flex flex-row leading-relaxed justify-center'>
                <div className = 'px-6 sm:px-12 md:w-2/5 lg:w-4/5'></div>
                <div className = 'leading-relaxed'>
                    <div className = 'flex justify-center'>
                        <h1 className = 'text-2xl font-extrabold pt-24 py-10 px-4 md:px-4'> The Importance of Deep Work and Time Block Planning | Part 1 </h1>
                    </div>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>TL;DR: Do deep work and time block your entire working time. </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                        <b>In my previous post, I took everyone through how it is possible to live an intentional life as a student in Singapore’s rigorous education system </b>, achieving results in areas other than academics, and social life. This piece would explain two fundamental concepts that work hand in hand in living a deep life. That being said, feel free to utilize anything in this that may help you become more productive and focused in your work. The two concepts are: firstly, deep work, and secondly, time block planning. In this two- part post series (I’m trying not to put tooo much information into one piece), I would explore these ideas in depth.
                    </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Through each section, I will elaborate on the specifics of how and why you should adopt these frameworks for doing work in general. I would provide several links to some of the tools that have been extremely helpful for me, which you may want to consider investing some money into.
                    </p>
                    <h3 className = "text-3xl font-bold py-1 md:px-40">
                        An introduction to deep work 
                    </h3>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    This concept of deep work first comes from Cal Newport (yes, I’ve been mentioning him a lot!). From his book, Newport defines deep work as “Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to your limit. These efforts create new value, improve your skill, and are hard to replicate.”, in his book, Deep Work, in 2016. This first dated back to the concepts in his book(s), How to Become a Straight-A Student (2006), where he introduced the concept of work accomplished = time spent x intensity of focus. I’ve been trying to apply this principle used in Deep Work for pretty much the entire year now, so this piece seeks to distill my best lessons that I’ve learnt in the context of Singapore.
                    </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Deep work as a student, in my definition, would be periods of focused studying. How do I apply it to my daily life? Doing deep work would mean doing tutorials or practice questions from school, revising flashcards, or doing practice papers when exam season is nearing. Or, deep work could also apply less generally to periods of intense focus, other than studying, when your mind is working. In my case, it could be coding, or even writing this piece — this could also be classified under the umbrella of deep work.
                    
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    ---
                    </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Okay, so there’s deep work, and then what’s the other kind of work , if it’s not entertainment?
                    </p>

                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Shallow work. I would say that this is all the administrative mumbo jumbo that a student has to do. This could mean sending emails, replying to your teachers’ text, attending Zoom calls for VIA meetings / school event planning, etc. While shallow work might not be common for a typical student, I personally believe that student councillors are a group of students who are incredibly inundated with such work (I was one before). This means more emails sent out to teachers, more proposals to be done for more school event planning, Instagram posts to be completed and broadcasted by so and so deadline… you get what I mean. These tasks are relatively mundane, and should be kept at a minimum.
                    </p>
                    <h3 className = "text-3xl font-bold py-1 md:px-40"> 
                    The Rationale for Deep Work
                    </h3>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Since humans default to activities that are enjoyable and rewarding in the short run, such as watching a Youtube video or an entertaining TikTok clip, there will be a constant urge of procrastination and the urge to do something else, rather than studying. This is exacerbated by distractions within the immediate environment, such as your phone, your computer or any digital device at all.
                    </p>
                    <p className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    The main principle behind this is that of context switching. The argument is that when you switch quickly between two forms of completely unrelated tasks (doing a question on differentiation and replying to your friend’s text) from one second to the next, this causes your focus to shift between the work that you’re doing and the emotions (or lack thereof) invoked by your friend’s text. This creates attention residue, so even if you could still get your differentiation question done while replying to your friend’s text, the quality of the work that’s completed will not be anywhere near as compared to when you were focused singly on the question. As a result, you fall into the trap of doing pseudo-work, where your mind is distracted and making you think as if you are spending time doing solid work, whereas in fact you aren’t.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    ---
                    </p>
                    <h3 className = "text-3xl font-bold py-1 md:px-40"> 
                    How to do Deep Work? 
                    </h3>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    How then, should I go about maximising my hours of deep work (or focused studying)? While it may sound simple, like employing the pomodoro technique to focus for 25 minutes and ‘resting’ for 5 minutes, I believe that you have to prime your mind for the tough work that’s ahead. This process may be largely overlooked by students, but I’ll cover it in the next part of this two-part series.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    The pomodoro technique is what I would recommend for doing focused work. However, due to attention residue and the need to spend time before the mind can solely focus on the work that it is doing, I recommend bumping the amount of focused time (before taking a break) to 30–40 minutes, before breaking for 5 minutes. It is important to note that during these 5 minutes, it is crucial for one to NOT look at their phone, check instagram, etc.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    Instead, practise some mindfulness techniques, do push-ups, take your eyes away from the screen or the work that you’re doing, without switching to any entertainment source. Iterate this for 2–3 times, before taking a long break, where you reset, take a look at your messages, etc. Repeat this whole process for 2–3 times a day, and that would be the (theoretical, sustainable) limit of doing deep work.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                        ---
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    The key to doing deep work is intense focus. I cannot stress this enough. You cannot afford to be distracted by your phones, open YouTube tabs, open Instagram tabs, TikTok videos, etc. Here are several tips that I have in combating the various urges while doing focused work.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    1. Throw your phone away. Not literally, though (or it may actually be a great idea). What I meant was putting your phone in a separate location, far from the place that you are currently studying in. Research has shown that attention spans decrease when mobile devices are placed in one’s line of sight. To maximize focused time, consider even passing your phone to a trusted friend/adult and ask them to hold it for you until after you are done with the block of work.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    2. Turn on airplane mode on your phone. Think I didn’t see WhatsApp Web coming? If you’re doing work primarily on a computer, such as rushing your project work, do not create opportunities for your mind to be distracted. Cutting off any and all connections from your phone is a sure fire way to maximize your chances of being focused.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    3. Utilize technology to your advantage. It’s not supposed to harm you, it’s supposed to help you. The complexity arises when people don’t have sufficient exposure (seems to be a recurring theme) to the right technological tools to help them.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    --- Get RescueTime. RescueTime will help you track the time that you spent across all devices, and it’s algorithm breaks down what is considered to be productive and not. This would give you a ballpark figure of how much work you were doing in the day.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    --- Want to track the amount of focused time / deep work throughout the day? Use BeFocused. Set the timer from anywhere between 30–50 minutes (no longer than 60, since you experience diminishing returns past that time), and the rest time from 5–10 minutes. Be sure to NOT context-switch during the rest breaks.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    --- Get Freedom.to. When you are trialing freedom.to, start sessions that will last the entire cycle (i.e. if you are doing a cycle of 3 Pomodoro's of 30 minutes each with 5 minutes break in between, start a session that is 100 minutes long, and include all websites that you can potentially be distracted by, including any .io game sites!!) The good thing about freedom is that it is only a partial block, meaning that you can still access the websites after your focus session, which was game-changing for me.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    4. Be sufficiently fueled. Have enough snacks / water/ drinks next to you to tide you through your periods of intense focus. The 5 minutes break is also for you to replace / stock up your food supply.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    5. Look forward to working deep. Change the location of the work that you are in to somewhere that is unconventional. Make trips to the neighborhood library, and make doing deep work worth it. Bring a couple of friends along with you to do deep work. Scared of being distracted? Ask them to do whatever you’re doing, and ask any questions during the short break in between.
                    </p>
                    <p className = 'flex justify-center text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    This may sound absurd, but priming one’s mind, and forming a routine of doing work that you don’t feel like doing, can be trained. The process of instilling discipline and establishing a routine may be tough, but it will be beneficial in the long run. Stay tuned for part 2, time block planning.
                    </p>
                    <Link className = 'flex justify-center' to ='/contact'>
                        <div className = "flex justify-center font-dosis font-bold w-4/5 md:w-4/5 rounded-xl mt-10 md:mt-12 shadow-md p-2 bg-gray-300 hover:bg-gray-400">
                        Contact me here. 
                        </div>
                    </Link>
                </div>
               
                <div className = 'px-6 sm:px-12 md:w-2/5 lg:w-4/5'></div>
            </div>
        </div>
    )
}
export default DeepWork