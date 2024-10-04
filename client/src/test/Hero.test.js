import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landingPage/home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("renders hero images", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "assets/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "Sign up for free" });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});