import React from 'react';
import Navigation from './Navigation';
import content from '../content';
import {Link} from 'react-router-dom';

function blogChoice(){
    return (
    <div>
        <Navigation />
        <div className = ''>
            
            <div class = ''>
            <div className = 'flex justify-center'>
                <h1 className = 'text-2xl font-extrabold pt-24 mx-auto'> Revision Techniques - How to Ace Your Exams </h1>
            </div>
            
                <h2 className = 'text-lg text-justify md:py-6 md:px-40'> I’m a 17 year old high school student in Singapore, notorious for the emphasis placed on grades and academic success. This article discusses the ways to optimise your revision progress when you have set aside a period of time to revise. 
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                Living a balanced life while pursuing great academic grades is HARD. Often, students have to choose two of the following: sleep, a vibrant social life, and good grades. What I’m offering today is a way to optimise your revision techniques to: 
                </h2>
                <ul className = 'list-inside list-disc text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                    <li>Prevent last minute cramming</li>
                    <li>Free up more time to pursue goals that you really care about </li>
                    <li>Boost your confidence and mastery level before the exams</li>
                </ul>

                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                I believe that there are two key components to a successful revision schedule, which has been tried and tested; and proven to work. 
                </h2>

                <div className = 'flex justify-center md:justify-start'>
                    <h1 className = 'text-2xl font-bold py-1 md:px-40'>
                    First, capture. 
                    </h1>
                </div>
                
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'> 
                You need a capture system that allows you to constantly review the revision material at hand. I’m a firm believer in the concept of spaced repetition, which is repeating the review process for hardest material the most frequently, while spreading out the review process over a period of time. 

                </h2>
                <h1 className = 'text-xl font-semibold py-3 px-4 md:py-1 md:px-40'>
                    Why this method? 
                </h1>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-1 md:px-40'> 
                This method works, because it forces reviewed content to be brought up consistently, therefore allowing whatever content that is being reviewed to be stored in long-term memory. 
        An example would be starting review two to three months before a major examination, from minute amounts. The key to this is consistency, and having literally no days off. </h2>
                <img
                className = 'h-auto w-auto md:py-1 md:px-4 md:px-40'
                src = {content.blog1.img}/>
                <div className = 'flex justify-center'>
                    <h3 className = 'md:py-1'> Anki Consistently. </h3>
                </div>
                
                <h2 className = 'text-lg pt-4 px-4 pb-3 md:py-6 md:px-40'> 
                    Student athletes should be familiar with this - even during periods of rest and rejuvenation, there should still be minimum physical activity done, which counts as ‘easy days’. The same concept should be applied to spaced repetition - do it everyday but with some days more than others. 
                </h2>

                <h1 className = 'text-xl font-semibold py-3 px-4 md:py-1 md:px-40'>
                How should I go about using this method?
                </h1>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'> 
                    I primarily use the software  <a href = 'https://ankiweb.net' className = 'font-bold text-gray-400 hover:text-red-700'> Anki </a> to go about engaging in spaced repetition. The algorithm is great and brings out cards that have poor performance to the top of the deck; so expect the hardest cards to be thrown out first. You can read the user guide here: https://leananki.com/how-to-use-anki-tutorial/. Or perhaps, I may write another short article detailing the basics of Anki for high school students.
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'> Once again, the key is to access Anki every single day. It might just be for 10–15 minutes and a couple of cards at the start, but consistency pays. You will soon realise that you would not need to experience the dreaded last minute cramming that so many students face if you pay your dues and review Anki diligently.</h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>One tip that I can offer for those who decide to go about using Anki is to treat the keying in of content as the first line of review. Yes, while typing the cards out on the computer has its own downsides, you can try to test yourself by not looking at your notes and seeing how much you have remembered while keying in. Apart from that, start logging Anki cards as soon as you receive new content from school. This allows you the greatest amount of time to review them, before your major exams.
        While reviewing, make sure that there are no distractions around you. Write out your answers on a piece of rough paper, or say the answer out loud, depending on which recall method suits you better.</h2>
                <div className = 'flex justify-center md:justify-start'>
                    <h1 className = 'text-2xl font-bold py-1 md:px-40'> 
                        Second, practice. 
                    </h1>
                </div>
                
                <h2 className = 'text-xl font-semibold py-3 px-4 md:py-1 md:px-40'>
                This is as crucial, if not more so than the previous step. 
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                Anki alone does not ensure that you have been exposed to the different curve balls that the exam is going to throw at you. Consistently practising past year questions is something that should be done one to three weeks out of major exams, the more time the better. The exposure you have to different types of questions allows you to employ deep practice to those questions, build a sufficient base of mastery for the ‘basic’ questions, before moving on to tackle the more challenging question sets.
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                A lot of students lack exposure to different types of questions simply because they do not have the time to practice, or are scrambling to capture their content; at the very last minute. This is an extremely risky path to take, especially for the applied sciences where knowing how to apply your knowledge to different scenarios is key.
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                After you have practiced past year questions, proceed to doing full-length papers under timed conditions. Simulate taking the exam in school at least twice, once again practise more if you have more time. Attempt to maximise the full length of the test; do not simply stop when you are done with the mock paper.
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                This is to simulate brain exertion for the entire period of the test, since you may never know how difficult the actual paper is, you would not want your brain to be fatigued when approaching the last few questions of an extremely long paper.
                </h2>
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                Lastly, as you are doing your practice questions, be sure to review them. For essays that require marking, DO NOT HESITATE to send them in for review at your school. Keep a word document on the mistakes that you have made in the past to serve as a reminder of where you could have gone wrong, learn from those mistakes and never repeat them again.
                </h2>

                <div className = 'flex justify-center md:justify-start'>
                    <h1 className = 'text-2xl font-bold py-1 md:px-40'>
                        Conclusion
                    </h1>
                </div>
                
                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                Remember: the key to excelling is to start your revision early on. Both capture and practice work hand in hand, doing these two during your revision blocks would aid you tremendously.
                </h2>

                <h2 className = 'text-lg py-3 px-4 text-justify md:py-6 md:px-40'>
                Cheers! All the best for your examinations! 🤩
                </h2>
                <Link className = 'flex justify-center' to ='/contact'>
                        <div className = "flex justify-center font-dosis font-bold w-4/5 md:w-4/5 rounded-xl mt-10 md:mt-12 shadow-md p-2 bg-gray-300 hover:bg-gray-400">
                        Contact me here. 
                        </div>
                </Link>
                </div>
                
            <div className = 'sm:px-2 md:px-12 lg:px-32'></div>
</div>
        


    </div>
        
    )
}

export default blogChoice;