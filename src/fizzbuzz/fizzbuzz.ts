export default class FizzBuzz {
  private limit: number;
  constructor(limit: number) {
    if (limit < 1) {
      throw "number should be 1 or higher";
    }
    this.limit = limit;
  }

  display(): string {
    let stringToDisplay: string = "";
    for (let i = 1; i <= this.limit; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        stringToDisplay = `${stringToDisplay}${i}`;
        continue;
      }

      if (i % 3 === 0) {
        stringToDisplay = `${stringToDisplay}Fizz`;
      }
      if (i % 5 === 0) {
        stringToDisplay = `${stringToDisplay}Buzz`;
      }
    }
    return stringToDisplay;
  }
}
