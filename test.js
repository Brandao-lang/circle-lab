const getGreeting = require('./project');

function addition(num1, num2) {
  return num1 + num2
}


test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Gives the sum of two numbers', () => {
  expect(addition(2,2)).toBe(4);
});



