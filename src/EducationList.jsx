import React from "react";
import { List } from "semantic-ui-react";

const EducationList = ({ education }) => {
  return (
    <List>
      <List.Item>
        {education.institution}
        <List.Content>
          <List.Header>{education.programm}</List.Header>
          <List.Description>{education.period}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default EducationList;
