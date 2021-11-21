import React, { useState, useEffect } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("./data/projects.json").then((response) => {
      setProjects(response.data);
    });
  }, []);

  let projectsList = projects.map((project) => {
    return (
      <div id={`project-${project.id}`} key={project.id}>
        <ProjectCard project={project} />
      </div>
    );
  });

  return (
    <Container>
      <Header as="h1" id="projects-header" color="olive" size="huge" dividing>
        My Projects
      </Header>
      <br></br>
      <Grid>{projectsList}</Grid>
    </Container>
  );
};

export default Projects;
