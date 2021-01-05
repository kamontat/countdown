import React from "react";
import { render, screen } from "@testing-library/react";
import { IndexPage } from "./Index";

test("#1", async () => {
  render(<IndexPage />);
  const linkElement = await screen.findByDisplayValue(/ms/);
  expect(linkElement).toBeInTheDocument();
});
