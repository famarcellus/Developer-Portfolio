import React from "react";


function NavBar(props) {
    
    return (
        <nav>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper navbar-color">
                    <a href="#" data-target="mobile-links" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down nav-sections">
                        <li><a href="#about-section-desc">About Me</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#footer-section">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>

            <ul className="sidenav" id="mobile-links">
                <li><a href="#about-section-desc">About Me</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        
    )
    
}

export default NavBar;