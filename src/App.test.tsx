import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

describe("The app", () => {
  it("should display its name as a heading", () => {
    render(<App />);

    const header = screen.getByRole("heading", { name: "Starter App" });

    expect(header).toBeInTheDocument();

    cleanup();
  });
});
