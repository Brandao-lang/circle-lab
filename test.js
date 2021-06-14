// const getGreeting = require('./project');
const { getGreeting, addition } = require('./project')


test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Gives the sum of two numbers', () => {
  expect(addition(2,2)).toBe(4);
});



