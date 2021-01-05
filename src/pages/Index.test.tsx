import React from "react";
import { render, screen } from "@testing-library/react";
import { IndexPage } from "./Index";

test("Received footer", async () => {
  render(<IndexPage />);
  const linkElement = await screen.findByText(/.*Create by.*/);
  expect(linkElement).toBeInTheDocument();
});
