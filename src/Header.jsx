import React from "react";
import { Menu, Segment, Header } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = ({ fullName }) => {
  return (
    <Segment inverted>
      <Header inverted textAlign="center" color="olive">
        Welcome to Portfolio of {fullName}
      </Header>
      <Menu secondary inverted>
        <Menu.Item
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: "/about" }}
          color="olive"
        />
        <Menu.Item
          id="cv-tab"
          name="CV"
          as={NavLink}
          to={{ pathname: "/cv" }}
          color="olive"
        />
        <Menu.Item
          id="projects-tab"
          name="my portfolio"
          as={NavLink}
          to={{ pathname: "/projects" }}
          color="olive"
        />
      </Menu>
    </Segment>
  );
};

export default HeaderComponent;
