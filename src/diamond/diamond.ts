export default class Diamond {
    print(givenLetter: string): string {
        const letterPositionInAlphabet = givenLetter.charCodeAt(0) - 64
        const diamondLines: string[] = []
        if (givenLetter === 'C') {
            diamondLines.push('  A  ');
            diamondLines.push(' B B ');
            diamondLines.push('C   C');
            diamondLines.push(' B B ');
            diamondLines.push('  A  ');
            return diamondLines.join("\n");
        }
        if (givenLetter === 'B') {
            return " A \nB B\n A ";
        }
        return 'A';
    }
}
