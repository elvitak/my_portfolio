import React from "react";
import { List, Segment } from "semantic-ui-react";

const EducationList = ({ education }) => {
  return (
    <Segment>
      <List divided relaxed>
        <List.Item>
          {education.institution}
          <List.Content>
            <List.Header>{education.programm}</List.Header>
            <List.Description>{education.period}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default EducationList;
