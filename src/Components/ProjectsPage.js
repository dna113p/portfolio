import React, { Component } from 'react';
import './ProjectsPage.css';
import projectData from '../projectData';

import ProjectCard from './ProjectCard';
import AboutMeCard from './AboutMeCard';

class ProjectsPage extends Component {

  render() {

    let projects = projectData.map((project,i) => {
      return (
        <ProjectCard key={i}
            title={project.title}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
            description={project.description}
            keywords={project.keywords}
            image={project.image}
          />
      )
    });


    return (
      <div className="ProjectsPage">
        <AboutMeCard />
        {projects}
      </div>
    );
  }
}

export default ProjectsPage;
