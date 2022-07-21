import ChristmasLightIntensity from "./christmas-light-intensity";
describe("ChristmasLightIntensity", () => {
  describe("definition", () => {
    const christmasLightIntensity = new ChristmasLightIntensity(1000);
    it("should be defined", () => {
      expect(christmasLightIntensity).toBeDefined();
    });

    it("should have a grid regarding its param", () => {
      expect(christmasLightIntensity.getTotalLight()).toBe(1000000);
    });
  });

  describe("switchOn", () => {
    const christmasLightIntensity = new ChristmasLightIntensity(1000);
    it("should be defined", () => {
        expect(christmasLightIntensity.switchOn).toBeDefined();
    });
    it("should increase the brightness by 1 to the given light", () => {
        christmasLightIntensity.switchOn(10, 10);
      expect(christmasLightIntensity.getLightStatus(10,10)).toBe(1);
    });

    it("should increase again the brightness by 1 to the given light", () => {
        christmasLightIntensity.switchOn(10, 10);
      expect(christmasLightIntensity.getLightStatus(10,10)).toBe(2);
    });
  });

  describe("switchOnBloc", () => {
    const christmasLightIntensity = new ChristmasLightIntensity(1000);
    beforeAll(() => {
      christmasLightIntensity.switchOnBloc(0, 0, 999, 0);
    });
    it("should be defined", () => {
      expect(christmasLightIntensity.switchOnBloc).toBeDefined();
    });
    it("should switch on the given light", () => {
      for (let i = 0; i <= 999; i++) {
        for (let j = 0; j <= 0; j++) {
          expect(christmasLightIntensity.getLightStatus(i,j)).toBe(1);
        }
      }
    });
  });

  describe("switchOff", () => {
    const christmasLightIntensity = new ChristmasLightIntensity(1000,2);
    it("should be defined", () => {
        expect(christmasLightIntensity.switchOff).toBeDefined();
    });
    it("should decrease the brightness by 1 to the given light", () => {
        christmasLightIntensity.switchOff(10, 10);
      expect(christmasLightIntensity.getLightStatus(10,10)).toBe(1);
    });

    it("should decrease again the brightness by 1 to the given light", () => {
        christmasLightIntensity.switchOff(10, 10);
      expect(christmasLightIntensity.getLightStatus(10,10)).toBe(0);
    });

    it("should do nothing if the given light is already at 0", () => {
        christmasLightIntensity.switchOff(10, 10);
      expect(christmasLightIntensity.getLightStatus(10,10)).toBe(0);
    });
  });
});
