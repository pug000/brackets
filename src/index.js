module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let pairBrackets = Object.fromEntries(bracketsConfig);

  str.split('').forEach((elem) => {
    let last = stack[stack.length - 1];

    if (pairBrackets[last] === elem) {
      stack.pop();
    } else {
      stack.push(elem);
    }
  })
  return stack.length === 0;
}
