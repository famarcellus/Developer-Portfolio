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
        <div className="row">
            <div className="single-project">
                <div className="col s12 l6">
                    <h3 className="title">{props.title}</h3>
                    <h4>{props.description}</h4>
                    {props.technologies.map((item) => {
                        return (
                            <a type="button" className="waves-effect waves-light btn-small green darken-2">{item}</a>
                        )
                    })}
                    {hasLiveLink ? <a type="button" href={props.liveLink} className="waves-effect waves-light btn-small green darken-2">Live Link</a> : <a class="btn disabled">Live Link: This site</a>}
                    <a type="button" href={props.sourceLink} className="waves-effect waves-light btn-small green darken-2">Source Code</a>

                </div>
                <div className="col s12 l6">
                {hasImageData ? <img src={props.image ? props.image : ""} alt={props.title} width="100%" height="auto"/> : ""}
                </div>
            </div>
        </div>
    )
}


export default IndividualProject;