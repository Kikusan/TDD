export default class ChristmasLightIntensity {
  private grid: number[][];
  private totalLights: number;
  constructor(size: number, brightness: number = 0) {
    this.totalLights = size * size;
    this.grid = new Array(size);
    for (let i = 0; i < size; i++) {
      this.grid[i] = new Array(size).fill(brightness);
    }
  }

  getTotalLight() {
    return this.totalLights;
  }

  getLightStatus(xAxe, yAxe) {
    return this.grid[xAxe][yAxe];
  }

  switchOn(xAxe, yAxe) {
    this.grid[xAxe][yAxe]++;
  }

  switchOnBloc(xAxe1, yAxe1, xAxe2, yAxe2) {
    for (let i = xAxe1; i <= xAxe2; i++) {
      for (let j = yAxe1; j <= yAxe2; j++) {
        this.switchOn(i, j);
      }
    }
  }

  switchOff(xAxe, yAxe) {
    if (this.grid[xAxe][yAxe] === 0) {
      return;
    }
    this.grid[xAxe][yAxe]--;
  }
}
