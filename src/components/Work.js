import React from "react";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work">
      <div>
        <div>
          <h1 className="sm:text-2xl text-2xl font-medium title-font text-white">
            {" "}
            My Work{" "}
          </h1>
          <p>Here are some of the projects I have worked on.</p>
        </div>
        <div>
          {work.map((project, index) => (
            <div key={index}>
              <div>
                <img src={project.image} alt="project" />
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </div>
                  <h3>Technologies Used:</h3>
                  <ul>
                    {project.tech_list.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
}
