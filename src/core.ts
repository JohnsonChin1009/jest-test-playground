function addTwoNumbers(x: number, y: number) {
  return x + y;
}

function subtractTwoNumbers(x: number, y: number) {
  if (x > y) {
    return x - y;
  } else {
    return y - x;
  }
}

function multiplyTwoNumbers(x: number, y: number) {
  return x * y;
}

export { addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers };
