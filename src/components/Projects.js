import React, { useState } from 'react'
import Project from './project/Project'
import projectone from '../assets/images/projectone.png'
import projecttwo from '../assets/images/projecttwo.png'
import projectthree from '../assets/images/projectthree.png'
import deezer from '../assets/images/deezer.png'
import radstyles from '../assets/images/radstyles.png'


function Projects() {
    const [Projects] =  useState([
        {title : "Dwallet", image: projectone},
        {title : "The Bulb Africa Fellowship", image: projecttwo},
        {title : "GoodBooks", image: projectthree},
        {title : "Deezer", image: deezer},
        {title : "RadStyles", image: radstyles},
    ]);
    return (
        <div>
            <div className="projects-section">
                <div className="project-container">
                    <div className="featured">
                        <h2 className="projects-title">Featured projects.</h2>
                        <div className="line"></div>
                        <p className="summary">
                            From time to time, i like to get my hands dirty, check out some of the 
                            projects I have worked on.
                        </p>
                    </div>
                    <div className="projects">
                        {Projects.map(project => (
                            <Project title={project.title} image={project.image}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
