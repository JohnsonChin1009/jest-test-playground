import "dotenv";

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

function divideTwoNumbers(x: number, y: number) {
  return x / y;
}

function loadSecret() {
  return process.env.SECRET_API_KEY == null;
}

export {
  addTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
  loadSecret,
  divideTwoNumbers,
};
