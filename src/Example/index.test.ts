import { testFunction } from ".";

describe("Example", () => {
  // AAA pattern
  it("test 1 should work", () => {
    // arrange
    var data = true;

    // Act
    const result = testFunction(data);

    // Assert

    expect(result).toBe(false);
  });
});
