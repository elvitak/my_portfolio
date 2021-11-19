import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../ProjectCard";
import "@testing-library/jest-dom";

const project = {
  id: 3,
  name: "Test Mobile UX",
  image:
    "https://image.freepik.com/free-psd/website-presentation-mockup-isolated_359791-172.jpg",
  description: "I like to design for the mobile platform.",
};

describe("ProjectCard.jsx", () => {
  beforeEach(() => {
    render(<ProjectCard project={project} />);
  });

  it("is expected to display the title of the project", () => {
    expect(screen.getByText("Test Mobile UX")).toBeInTheDocument();
  });
});
