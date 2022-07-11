import ChristmasLight from "./christmas-light";
describe("ChristmasLight", () => {
  describe("definition", () => {
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
  describe("switchOn", () => {
    const christmasLight = new ChristmasLight(1000);
    beforeAll(() => {
      christmasLight.switchOn(10, 10);
    });
    it("should be defined", () => {
      expect(christmasLight.switchOn).toBeDefined();
    });
    it("should switch on the given light", () => {
      expect(christmasLight.grid[10][10]).toBe(true);
    });
  });

  describe("switchOnBloc", () => {
    const christmasLight = new ChristmasLight(1000);
    beforeAll(() => {
      christmasLight.switchOnBloc(0, 0, 999, 0);
    });
    it("should be defined", () => {
      expect(christmasLight.switchOnBloc).toBeDefined();
    });
    it("should switch on the given light", () => {
      for (let i = 0; i <= 999; i++) {
        for (let j = 0; j <= 0; j++) {
          expect(christmasLight.grid[i][j]).toBe(true);
        }
      }
    });
  });

  describe("switchOff", () => {
    const christmasLight = new ChristmasLight(1000);
    beforeAll(() => {
      christmasLight.switchOff(10, 10);
    });
    it("should be defined", () => {
      expect(christmasLight.switchOff).toBeDefined();
    });
    it("should switch off the given light", () => {
      expect(christmasLight.grid[10][10]).toBe(false);
    });
  });

  describe("switchOffBloc", () => {
    const christmasLight = new ChristmasLight(1000);
    beforeAll(() => {
      christmasLight.switchOffBloc(10, 10, 20, 20);
    });
    it("should be defined", () => {
      expect(christmasLight.switchOffBloc).toBeDefined();
    });
    it("should switch on the given light", () => {
      for (let i = 10; i <= 20; i++) {
        for (let j = 10; j <= 20; j++) {
          expect(christmasLight.grid[i][j]).toBe(false);
        }
      }
    });
  });
});
