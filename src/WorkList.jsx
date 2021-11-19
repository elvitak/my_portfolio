import React from "react";
import { Segment, List } from "semantic-ui-react";

const WorkList = ({ work }) => {
  return (
    <Segment>
      <List divided relaxed>
        <List.Item>
          {work.company}
          <List.Content>
            <List.Header>{work.position}</List.Header>
            <List.Description>{work.period}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default WorkList;
