import ChristmasLight from "./christmas-light";
describe("ChristmasLight", () => {
  const christmasLight = new ChristmasLight(1000);
  describe("intanciation", () => {
    it("should be defined", () => {
      expect(christmasLight).toBeDefined();
    });

    it("should have a grid regarding its param", () => {
      for (let i = 0; i < 1000; i++) {
        expect(christmasLight.grid[i].length).toBe(1000);
      }
    });
  });
  describe("light", () => {
    beforeAll(() => {
      christmasLight.light(10, 10);
    });
    it("should be defined", () => {
      expect(christmasLight.light).toBeDefined();
    });
    it("should switch on the given light", () => {
      expect(christmasLight.grid[10][10]).toBeTruthy();
    });
  });
});
