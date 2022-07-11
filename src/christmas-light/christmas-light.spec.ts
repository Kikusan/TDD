import ChristmasLight from "./christmas-light";
describe("ChristmasLight", () => {
  const christmasLight = new ChristmasLight(1000);
  it("should be define", () => {
    expect(christmasLight).toBeDefined();
  });

  it("should have a grid regarding its param", () => {
    for (let i = 0; i < 1000; i++) {
      expect(christmasLight.grid[i].length).toBe(1000);
    }
  });
});
