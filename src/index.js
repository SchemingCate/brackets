module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const sameSymbolBrackets = [];
  const bracketsPairs = {};

  bracketsConfig.forEach((element) => {
    if (element[0] === element[1]) {
      sameSymbolBrackets.push(element[0]);
    } else {
      openBrackets.push(element[0]);
      bracketsPairs[element[1]] = element[0];
    }
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (sameSymbolBrackets.includes(currentSymbol)) {
      if (currentSymbol === topElement) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        if (bracketsPairs[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
};
