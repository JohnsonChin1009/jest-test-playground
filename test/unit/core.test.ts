import {
  addTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
} from "../../src/core";

describe("Core Unit Testing", () => {
  describe("Add Numbers Testing", () => {
    it("should add two numbers correctly", () => {
      const a = 4;
      const b = 6;

      expect(addTwoNumbers(a, b)).toBe(10);
    });
  });

  describe("Subtract Numbers Testing", () => {
    it("should subtract two numbers correctly", () => {
      const a = 10;
      const b = 15;

      expect(subtractTwoNumbers(a, b)).toBe(5);
    });
  });

  describe("Multiply Numbers Testing", () => {
    it("should multiply two numbers correctly", () => {
      const a = 10;
      const b = 5;

      expect(multiplyTwoNumbers(a, b)).toBe(50);
    });
  });
});
