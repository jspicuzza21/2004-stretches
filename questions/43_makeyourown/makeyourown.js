// Make your own stretch
// try to solve for a challenging problem
// write at minium three test specs
// Jest documentation: https://github.com/sapegin/jest-cheat-sheet
// submit the stretch with solution code and test specs passing

const makeyourown = (string) => {
    let newStr='';

    if (typeof string!=='string'){
      return 'Please enter a string'
    }
    
    for (let i=0; i<string.length; i++){
      if (string[i] ===string[i].toUpperCase() && string[i]!==' '){
        newStr +=' ';
        newStr += string[i]
      } else {
        newStr += string[i]
      }
    }
  return newStr;
};

module.exports = { makeyourown };
