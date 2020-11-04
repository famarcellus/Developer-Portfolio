import React from "react";


function IndividualProject(props) {

    let hasImageData;

    if(props.image === "") {
        hasImageData = false;
    }
    else {
        hasImageData = true;
    }


    let hasLiveLink;

    if(props.liveLink === "") {
        hasLiveLink = false;
    }
    else {
        hasLiveLink = true;
    }
   

    return (
        <article className="row single-project">
            <div className="col s12 l6">
                <h3 className="each-title">{props.title}</h3>
                <h4 className="paragraph-line-height project-desc">{props.description}</h4>
                {props.technologies.map((item) => {
                    return (
                        <a type="button" className="waves-effect waves-light btn-small green darken-2">{item}</a>
                    )
                })}
                <a type="button" href={props.sourceLink} className="waves-effect waves-light btn-small indigo darken-1">Source Code</a>
                {hasLiveLink ? <a type="button" href={props.liveLink} className="waves-effect waves-light btn-small indigo darken-1">Live Link</a> : <a className="btn disabled black-text text-darken-2">Live Link: This site</a>}
                    

            </div>
            <div className="col s12 l6">
                {hasImageData ? <img src={props.image ? props.image : ""} alt={props.title} width="100%" height="auto"/> : ""}
            </div>
        </article>
    )
}


export default IndividualProject;