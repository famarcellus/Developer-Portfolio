import React from "react";
 

function AboutMe() {

    return (
        <div>
            <div id="particles-js">
                <div className="about-section-intro">
                    <h1>Hi, my name is <span className="name-color">Fabio Marcellus.</span></h1>
                    <h1>I'm a <span className="job-title">Front End Developer!</span></h1>
                </div>
            
            </div>
            <div className="about-section-desc">
                <div className="container">
                    <div className="my-wrapper valign-wrapper center-align">
                        <h2>ABOUT ME</h2>
                        <h4>I am a <span>self-taught</span> web developer who loves working 
                        on the Front End and is familiar with the Back End of applications. One of my greatest strengths is my attention to detail. 
                        I have created projects using HTML, CSS, Javascript, MongoDB, Express.js, React, Node.js, Materialize, Bootstrap and more!</h4>
                        <a className="waves-effect waves-light btn-large">View Resume<i class="material-icons right">description</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;