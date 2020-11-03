import React from "react";
import IndividualProject from "./IndividualProject";
import ProjectData from "../../Data/ProjectData";



function Projects() {
    return (
        <div className="projects-section">
            <h2>PROJECTS</h2>
            <div className="container">
                {ProjectData.map((item) => {
                    return (
                        <IndividualProject 
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                            image={item.image}
                            liveLink={item.liveLink}
                            sourceLink={item.sourceLink}
                        />
                    );
                })}
                
            </div>
        </div>
    )
}


export default Projects;