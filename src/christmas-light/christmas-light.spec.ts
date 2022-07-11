import ChristmasLight from "./christmas-light";
describe("ChristmasLight", () => {
  describe("intanciation", () => {
    const christmasLight = new ChristmasLight(1000);
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
    const christmasLight = new ChristmasLight(1000);
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

  describe("lightBloc", () => {
    const christmasLight = new ChristmasLight(1000);
    beforeAll(() => {
      christmasLight.lightBloc(10, 10, 20, 20);
    });
    it("should be defined", () => {
      expect(christmasLight.lightBloc).toBeDefined();
    });
    it("should switch on the given light", () => {
      for (let i = 10; i <= 20; i++) {
        for (let j = 10; j <= 20; j++) {
          expect(christmasLight.grid[i][j]).toBeTruthy();
        }
      }
    });
  });
});
