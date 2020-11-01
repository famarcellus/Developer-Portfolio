import React from "react";
 

function AboutMe() {

    return (
        <div>
            <div id="particles-js">
                <div className="about-section-intro surround-white">
                    <h1>Hi, my name is <span className="name-color">Fabio Marcellus.</span></h1>
                    <h1>I'm a <span className="job-title">Full Stack Developer!</span></h1>
                </div>
            
            </div>
            <div className="about-section-desc">
                <div className="container">
                    <div className="my-wrapper valign-wrapper center-align">
                        <h2>ABOUT ME</h2>
                        <h4>I am a <span>self-taught</span> web developer who loves working 
                        on both the front end and back end of applications and has great attention to details. 
                        I have created projects using HTML, CSS, Javascript, MongoDB, Express.js, React, Node.js, Materialize, and more!</h4>
                        <a className="waves-effect waves-light btn-large center-align">View Resume<i class="material-icons right">description</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;