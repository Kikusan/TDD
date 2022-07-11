export default class ChristmasLight {
  grid;
  constructor(size: number) {
    this.grid = new Array(size);

    for (var i = 0; i < size; i++) {
      this.grid[i] = new Array(size);
    }
  }
  test() {
    console.log("ok");
  }
}
