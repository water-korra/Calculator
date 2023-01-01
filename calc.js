const fs = require("fs");
const inputFileText = fs.readFileSync("input.txt", "utf8");

const Parse = (line) => {
  const input = line.split(".");
  return input;
};
const parsedLine = Parse(inputFileText);

const CalculatorState = class {
  constructor(screen, firstNumber, op, startNewNumber) {
    this.screen = 0;
    this.firstNumber = firstNumber;
    this.op = op;
    this.startNewNumber = false;
  }
};

const HandleKeyPress = (obj, element) => {
  const operands = ["*", "/", "+", "-"];
  if (!obj.startNewNumber) {
    obj.screen += element;
  }
  if (operands.includes(element)) {
    obj.op = element;
    obj.firstNumber = parseInt(obj.screen);
    obj.startNewNumber = false;
    obj.screen = 0;
  }
  obj.screen = parseInt(obj.screen);

  if (element === "=") {
    if (obj.op === "/") obj.screen = Math.floor(obj.firstNumber / obj.screen);
    else if (obj.op === "*") obj.screen = obj.firstNumber * obj.screen;
    else if (obj.op === "+") obj.screen += obj.firstNumber;
    else if (obj.op === "-") obj.screen = obj.firstNumber - obj.screen;
  }
};

const Calculate = (line) => {
  const calculator = new CalculatorState();
  for (let element of line) {
    HandleKeyPress(calculator, element);
  }
  return calculator.screen;
};
const calculations = Calculate(parsedLine).toString();

const writeOutput = (data) => {
  fs.writeFileSync("output.txt", data);
};

writeOutput(calculations);


module.exports = { Parse, Calculate, inputFileText, parsedLine, writeOutput }

