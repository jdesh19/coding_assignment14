import React from "react";
import { skills } from "../data";

export default function Skills() {

    return(
        <section id="skills">
            <div>
            <h2 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">Skills</h2>
            <p>{skills[0].description}</p>
            <br/>
            
            <h3 className="sm:text-2xl text-2xl font-medium title-font text-white mb-2">Languages:</h3>
            <ul>
            {skills[0].languages.map((language, index) => (
                <li key={index}>{language}</li>
            ))}
            </ul>
            <br/>
    
            <h3 className="sm:text-2xl text-2xl font-medium title-font text-white mb-4">Tools:</h3>
            <ul>
            {skills[0].tools.map((tool, index) => (
                <li key={index}>{tool}</li>
            ))}
            </ul>
        </div>
        <br/>
      </section>
    );
}