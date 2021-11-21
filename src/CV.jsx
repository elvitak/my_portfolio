import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, List, Header, Container } from "semantic-ui-react";
import EducationList from "./EducationList";
import WorkList from "./WorkList";

const CV = () => {
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  useEffect(() => {
    axios.get("./data/education.json").then((response) => {
      setEducation(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("./data/work.json").then((response) => {
      setWork(response.data);
    });
  }, []);

  let educationList = education.map((education) => {
    return (
      <div id={`edu-${education.id}`} key={education.id}>
        <EducationList education={education} />
      </div>
    );
  });
  let workList = work.map((work) => {
    return (
      <div id={`work-${work.id}`} key={work.id}>
        <WorkList work={work} />
      </div>
    );
  });

  return (
    <Container>
      <Header as="h1" id="cv" color="olive" size="huge" dividing>
        Curriculum Vitae
      </Header>

      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <Header as="h2" subheader id="education">
            Education
          </Header>
          <List>{educationList}</List>
        </Grid.Column>
        <Grid.Column>
          <Header as="h2" subheader id="work">
            Work Experience
          </Header>
          <List>{workList}</List>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CV;
