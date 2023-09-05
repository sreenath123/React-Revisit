import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Solution from "./solution";

describe("test solution", () => {
  it("Renders the title, count, and button elements with the correct test IDs", () => {
    render(<Solution />);
    const title = screen.getByTestId("title");
    const count = screen.getByTestId("count");
    const button = screen.getByTestId("button");
    expect(title).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Increment Count");
  });
  it("Starts with a count of 0", () => {
    render(<Solution />);
    const count = screen.getByTestId("count");
    expect(count.textContent).toBe("Current Count: 0");
  });

  it("Update the count when the button is clicked", () => {
    render(<Solution />);
    const count = screen.getByTestId("count");
    const button = screen.getByTestId("button");
    expect(count.textContent).toBe("Current Count: 0");
    fireEvent.click(button);
    expect(count.textContent).toBe("Current Count: 1");
  });
});
