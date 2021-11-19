import React from "react";
import { render, screen } from "@testing-library/react";
import EducationList from "../EducationList";
import "@testing-library/jest-dom";

const education = {
  id: 1,
  institution: "Monster University",
  programm: "Master's degree, Scaring kids",
  period: "2016-2018",
};

describe("EducationList.jsx", () => {
  beforeEach(() => {
    render(<EducationList education={education} />);
  });

  it("is expected to display correct mock data", () => {
    expect(screen.getByText("Monster University")).toBeInTheDocument();
  });
});
