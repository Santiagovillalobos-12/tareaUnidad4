import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "./header";

test("renders content", () => {
  const note = {
    content: "esto es un test",
    important: true,
  };

  render(<Header note={note} />);

  expect(screen.getByText("Cambiar tema")).toBeInTheDocument();
});
