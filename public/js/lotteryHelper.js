function genTicket(n) {
  let min = Math.pow(10, n - 1);
  let max = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumOfDigits(num) {
  let res = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  return res;
}

export {genTicket , sumOfDigits}