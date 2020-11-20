import { render, screen } from "@testing-library/react";
import Suma from "../../src/services/Suma";

describe("Testing normal value of Sum", () => {
  test("Sum 2 plus 2", () => {
    // Preparación
    const a = 2;
    const b = 2;

    // Ejecución
    const result = Suma(a, b);

    // Comprobación

    expect(result).toBe(4);
  });

  test("Sum 2 plus -2", () => {
    // Preparación
    const a = 2;
    const b = -2;

    // Ejecución
    const result = Suma(a, b);

    // Comprobación

    expect(result).toBe(0);
  });
});
