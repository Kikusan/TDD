import FizzBuzz from "./fizzbuzz";
describe("FizzBuzz", () => {
  describe("definition", () => {
    const fizzbuzz = new FizzBuzz(3);
    it("should be defined", () => {
      expect(fizzbuzz).toBeDefined();
    });

    it("should throw if number is 0 or below", () => {
      try {
        new FizzBuzz(-3);
      } catch (error) {
        expect(error).toBeDefined();
        return;
      }
      expect(true).toBe(false);
    });
  });

  describe("display", () => {
    it("should display 12 if param is 2", () => {
      const fizzbuzz = new FizzBuzz(2);
      const result = fizzbuzz.display();
      expect(result).toBe("12");
    });

    it("should display 12fizz if param is 3", () => {
      const fizzbuzz = new FizzBuzz(3);
      const result = fizzbuzz.display();
      expect(result).toBe("12Fizz");
    });

    it("should display 12fizz4buzz if param is 5", () => {
      const fizzbuzz = new FizzBuzz(5);
      const result = fizzbuzz.display();
      expect(result).toBe("12Fizz4Buzz");
    });

    it("should display the correct string if param is 15", () => {
      const fizzbuzz = new FizzBuzz(15);
      const expectedResult = "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz";
      const result = fizzbuzz.display();
      expect(result).toBe(expectedResult);
    });

    it("should display the correct string if param is 100", () => {
      const fizzbuzz = new FizzBuzz(100);
      const expectedResult =
        "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz";
      const result = fizzbuzz.display();
      expect(result).toBe(expectedResult);
    });
  });
});
