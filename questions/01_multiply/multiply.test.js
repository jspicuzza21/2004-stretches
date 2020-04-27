const { multiply } = require('./multiply');

describe('multiply testing', () => {
  xtest('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(multiply()).toThrow('Please enter two numbers');

    expect(() => multiply('2')).toThrow('Please enter a number');
  });

  xtest('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof(multiply(2,2))).toBe('number');

    // test that the returned value is correct
    expect(multiply(2,2)).toBe(4);

    // test some other values
    expect(multiply(10,5)).toBe(50);
  });

  xtest('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values

    let num1=Math.floor((Math.random() * 100) + 1)
    let num2=Math.floor((Math.random() * 100) + 1)

    expect(multiply(num1,num2)).toBe(num1*num2);

  });
});
