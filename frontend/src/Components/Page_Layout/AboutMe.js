import React from "react";
 

function AboutMe() {

    return (
        <section id="about-section" className="about-section">
            <div id="particles-js">
                <div id="about-section-intro">
                    <h1>Hi, my name is <span className="name-color">Fabio Marcellus.</span></h1>
                    <h1>I'm a <span className="job-title">Front End Developer!</span></h1>
                    <a href="#about-section-desc" class="waves-effect waves-light btn-large blue-grey darken-4">Find out more</a>
                </div>
            
            </div>
            <div id="about-section-desc">
                <div className="container">
                    <div className="my-wrapper valign-wrapper center-align">
                        <h2 className="titles">ABOUT ME</h2>
                        <h4 className="paragraph-line-height background-info">I am a <b>self-taught</b> web developer who loves working 
                        on the Front End and is familiar with the Back End of applications. I like to make <b>accessible</b> applications that are designed mobile-first, <b>SEO</b>-friendly, but most importantly, ensure it is <b>responsive.</b> One of my greatest strengths is my attention to detail. 
                        </h4>
                        <h2 className="titles skills-section">SKILLS</h2>
                        <h4 className="skills-section color-skills">HTML, CSS/SCSS, JavaScript, JSX, React, JSON, Webpack, Git, Github</h4>
                        <a className="waves-effect waves-light btn-large">View Resume<i class="material-icons right">description</i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;