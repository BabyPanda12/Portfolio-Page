import React from "react";
import 'font-awesome/css/font-awesome.min.css';


function Intro() {
    return (
        <div className="flex items-center justify center flex-col 
        text-center pt-20 pb-6">

            <h1 className="text-4xl md:text-7xl mb-1 bd:mb-3 font-bold">Hello from Ivana Stojanova!</h1>
            <p className="text-base md:text-x1 mb-3 font-medium">That's me - a prospective Software Engineer!
                This is my personal portfolio website(it is still being worked on, as creativity never stops). 
                I hope that it's fun for you to see, since being an IT student <i class="fa-solid fa-terminal"></i>  keeps you busy all the time, I didn't have much time to dedicate to this website. 
                Coding is more than just a skill to me — it’s a way to contribute to something bigger. I'm passionate about the impact technology can have on improving society, and I’m excited to be a part of that journey.<br></br>
                Of course, life isn’t all about code! In do also find time for leiser activites, like travelling <i className="fa-solid fa-earth-americas"></i>, watching tv shows and movies, reading, cooking(and eating, I belive I live to eat, not the other way aroudn!);
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold"> Below you can see some of the projects I have worked on. 
                By clicking on them you will be taken to the corresponding GitHub reposetories. 
                I know these projects are far from perfect, 
                still, I want to show my journey and growth. Since completing these projects, I’ve worked on more advanced projects and continue to improve my skills.
                </p>
        </div>
    )
}

export default Intro;
