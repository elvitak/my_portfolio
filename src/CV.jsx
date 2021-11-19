import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, List } from "semantic-ui-react";
import EducationList from "./EducationList";

const CV = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios.get("./data/education.json").then((response) => {
      setEducation(response.data);
    });
  }, []);

  let educationList = education.map((education) => {
    return (
      <div id={`edu-${education.id}`} key={education.id}>
        <EducationList education={education} />
      </div>
    );
  });

  return (
    <Container>
      <h1 id="education">Education</h1>
      <List>{educationList}</List>
    </Container>
  );
};

export default CV;
