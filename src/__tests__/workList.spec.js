import React from "react";
import { render, screen } from "@testing-library/react";
import WorkList from "../WorkList";
import "@testing-library/jest-dom";

const work = {
  id: 1,
  company: "Most Amazing Company Ever",
  position: "CEO",
  period: "2019-2022",
};

describe("WorkList.jsx", () => {
  beforeEach(() => {
    render(<WorkList work={work} />);
  });

  it("is expected to display correct mock data", () => {
    expect(screen.getByText("Most Amazing Company Ever")).toBeInTheDocument();
  });
});
