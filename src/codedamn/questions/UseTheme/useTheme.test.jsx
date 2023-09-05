import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useTheme from "./useTheme";
import { act } from "react-dom/test-utils";
describe("test usetheme custom hook", () => {
  it("returns initial theme as light", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
  });
  it("should toggle theme", () => {
    const { result } = renderHook(() => useTheme());
    const { toggleTheme } = result.current;
    act(() => toggleTheme());
    const { theme } = result.current;
    expect(theme).toBe("dark");
  });
  it("should toggle theme from light -> dark -> light", () => {
    const { result } = renderHook(() => useTheme());
    act(() => result.current.toggleTheme());
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe("light");
  });
});
