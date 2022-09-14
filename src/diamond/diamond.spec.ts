import Diamond from './diamond';

describe("Diamond", () => {
    describe("definition", () => {
        const diamond = new Diamond();
        it("should be defined", () => {
            expect(diamond).toBeDefined();
        });
    });

    describe("display", () => {

        it("should display A when the given letter is A", () => {
            const givenLetter = 'A';
            const expectedResult = 'A';
            const diamond = new Diamond();
            const actualResult = diamond.print(givenLetter);
            expect(actualResult).toBe(expectedResult)
        })

        it("should display a B diamond when the given letter is B", () => {
            const givenLetter = 'B';
            const expectedResult = ''
                + " A \n"
                + "B B\n"
                + " A ";
            const diamond = new Diamond();
            const actualResult = diamond.print(givenLetter);
            expect(actualResult).toBe(expectedResult)
        })

        it("should display a C diamond when the given letter is C", () => {
            const givenLetter = 'C';
            const expectedResult = ''
                + "  A  \n"
                + " B B \n"
                + "C   C\n"
                + " B B \n"
                + "  A  ";
            const diamond = new Diamond();
            const actualResult = diamond.print(givenLetter);
            expect(expectedResult).toBe(actualResult)
        })
    })
});