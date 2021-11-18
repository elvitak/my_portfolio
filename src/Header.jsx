import React from "react";
import { Menu, Segment, Header } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = ({ fullName }) => {
  return (
    <Segment inverted>
      <Header inverted textAlign="center">
        Welcome to Portfolio of {fullName}
      </Header>
      <Menu secondary inverted>
        <Menu.Item
          id="header"
          name="my portfolio"
          as={Link}
          to={{ pathname: "/" }}
        />
        <Menu.Item
          id="about-tab"
          name="about me"
          as={NavLink}
          to={{ pathname: "/about" }}
        />
        <Menu.Item
          id="projects-tab"
          name="my portfolio"
          as={NavLink}
          to={{ pathname: "/projects" }}
        />
      </Menu>
    </Segment>
  );
};

export default HeaderComponent;
