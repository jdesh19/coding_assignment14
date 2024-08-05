import React from "react";
import { resources } from '../data';

export default function Resources() {
    return(
        <section id="resources">
      <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Resources:</h1>
        {resources.map((resource, index) => (
          <div key={index} >
            <h2 className="sm:text-2xl text-2xl font-medium title-font text-white">{resource.title}</h2>
            <img src={resource.image} alt={resource.title}  className="w-1/3"/>
            <p>{resource.summary}
                <a href={resource.link} target="_blank" rel="noreferrer" className="ml-1" >
                Heres The link.
                </a>
            </p>
          </div>
        ))}
      </div>
    </section>
    );
}