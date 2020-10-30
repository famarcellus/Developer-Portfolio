import React, {useState} from "react";


function NavBar(props) {
    
    return (
        <header>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <a href="#!" className="brand-logo">Fabio</a>
                    <a href="#" data-target="mobile-links" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

            <ul className="sidenav" id="mobile-links">
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
        
    )
    
}

export default NavBar;