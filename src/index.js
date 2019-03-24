module.exports = function check(str, bracketsConfig) {
  const openBrackets = splitConfigIntoOpenBrackets(bracketsConfig);
  const closeBrackets = splitConfigIntoCloseBrackets(bracketsConfig);
  const result = checkStringInCorrect(str, openBrackets, closeBrackets);

  return result;
}

function splitConfigIntoOpenBrackets(bracketsConfig) {
  let openBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
  }

  return openBrackets;
}

function splitConfigIntoCloseBrackets(bracketsConfig) {
  let closeBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    closeBrackets.push(bracketsConfig[i][1]);
  }

  return closeBrackets;
}

function checkStringInCorrect(str, openBrackets, closeBrackets) {
  let array = [];
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i]) && closeBrackets.includes(str[i])) {

      if (array.includes(str[i])) {
        let popped = array.pop();

        if (popped !== str[i]) {
          result = false;
        }

      } else {
        array.push(str[i]);
      }

    } else {

      if (openBrackets.includes(str[i])) {
        array.push(str[i]);
      } else {
        let popped = array.pop();

        if (closeBrackets.indexOf(str[i]) !== openBrackets.indexOf(popped)) {
          result = false;
        }
      }
    }
  }

  if (array.length) {
    result = false;
  }

  return result;
}