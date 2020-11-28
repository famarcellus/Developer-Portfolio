import React from "react";


function NavBar(props) {
    
    function toggleMenu() {
        let x = document.getElementsByClassName("mobile-menu")[0];
        if(x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


    return (
        <nav>
            <div className="navbar">
                <ul className="sections">
                    <li><a className="items" href="#about-section-desc">About</a></li>
                    <li><a className="items" href="#projects-section">Projects</a></li>
                    <li><a className="items" href="#footer-section">Contact</a></li>
                    <li><a className="hamburger" href="javascript:void(0)" onClick={() => {toggleMenu()}}><i className="fa fa-bars"></i></a></li>
                </ul>
            </div>
            <div className="mobile-menu">
                <a href="#about-section-desc">About</a>
                <a href="#projects-section">Projects</a>
                <a href="#footer-section">Contact</a>    
            </div>
        </nav>
        
    )
    
}

export default NavBar;