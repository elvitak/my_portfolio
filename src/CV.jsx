import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, List } from "semantic-ui-react";
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
    <>
      <h1 id="cv">Curriculum Vitae</h1>
      <Container>
        <h2 id="education">Education</h2>
        <List>{educationList}</List>
      </Container>
      <Container>
        <h2 id="work">Work Experience</h2>
        <List>{workList}</List>
      </Container>
    </>
  );
};

export default CV;
