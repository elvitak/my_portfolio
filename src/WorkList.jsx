import React from "react";
import { List } from "semantic-ui-react";

const WorkList = ({ work }) => {
  return (
    <List>
      <List.Item>
        {work.company}
        <List.Content>
          <List.Header>{work.position}</List.Header>
          <List.Description>{work.period}</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default WorkList;
