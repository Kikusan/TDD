export default class ChristmasLight {
  grid: Boolean[][];
  constructor(size: number) {
    this.grid = new Array(size);
    for (var i = 0; i < size; i++) {
      this.grid[i] = new Array(size).fill(false);
    }
  }

  switchOn(xAxe, yAxe) {
    this.grid[xAxe][yAxe] = true;
  }

  switchOnBloc(xAxe1, yAxe1, xAxe2, yAxe2) {
    for (let i = xAxe1; i <= xAxe2; i++) {
      for (let j = yAxe1; j <= yAxe2; j++) {
        this.switchOn(i, j);
      }
    }
  }

  switchOff(xAxe, yAxe) {
    this.grid[xAxe][yAxe] = false;
  }

  switchOffBloc(xAxe1, yAxe1, xAxe2, yAxe2) {
    for (let i = xAxe1; i <= xAxe2; i++) {
      for (let j = yAxe1; j <= yAxe2; j++) {
        this.switchOff(i, j);
      }
    }
  }

  toggle(xAxe, yAxe) {
    this.grid[xAxe][yAxe] = !this.grid[xAxe][yAxe];
  }

  toggleBloc(xAxe1, yAxe1, xAxe2, yAxe2) {
    for (let i = xAxe1; i <= xAxe2; i++) {
      for (let j = yAxe1; j <= yAxe2; j++) {
        this.toggle(i, j);
      }
    }
  }
}
