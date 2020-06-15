const { makeyourown } = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('Takes only a string and throws ans error if not a string', () => {
    expect(makeyourown([])).toEqual('Please enter a string');
  });
  it('takes a camel case string and turns it into two words', () => {
    expect(makeyourown('camelCase')).toEqual('camel Case');
  });
  it('cam take in multiple words', () => {
    expect(makeyourown('camelCase camelCase camelCase')).toEqual('camel Case camel Case camel Case');
  });
});
