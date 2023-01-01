const fs = require("fs");
const { Parse, Calculate} = require('./calc.js')

test('parse input file', () => {
    expectedOutput = [
        '1', '2', '',
        '+', '1', '2',
        '='
      ]
    input = "1 2  + 1 2 ="
    expect(Parse(input)).toEqual(expectedOutput)
});

describe(
    "Calc function check",
    () => {
        const testCases = [
            {
                input: [""],
                expectedOutput: 0
            },
            {
                input: ["1", " ", "2"],
                expectedOutput: 12
            },
            {
                input: ["1", "2", "3", "", "+", "4", "5", "6", "="],
                expectedOutput: 579
            },
            {
                input: ["1", "2", "3", "", "-", "2", "3", "="],
                expectedOutput: 100
            },
            {
                input: ["1", "0", "", "-", "1", "0", "0", "="],
                expectedOutput: -90
            },
            {
                input: ["1", "0", "", "*", "2", "2", "="],
                expectedOutput: 220
            },
            {
                input: ["1", "0", "0", "", "/", "3", "="],
                expectedOutput: 33
            },
            {
                input: ["9", "", "/", "1", "0", "="],
                expectedOutput: 0
            },
            {
                input: ["1", "2", "3", "", "+", "4"],
                expectedOutput: 4
            },
            {
                input: ["1", "2", "3", "", "+", "4", "5", "6"],
                expectedOutput: 456
            },
        ]
        testCases.forEach(test => {
            it(
                `Input : ${test.input}, Expected : ${test.expectedOutput}`,
                () => {
                    const res = Calculate(test.input)
                    expect(res).toEqual(test.expectedOutput)
                }
            )
        })
    }
)

