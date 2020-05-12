//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  //YOUR CODE HERE
  if (typeof(num)!=='number' || num<1 ||num>=4000){
    throw('Please enter a valid number')
  }
  let newStr=''
  const dictionary={
    M:1000,
    CM: 900,
    D:500,
    CD: 400,
    C:100,
    XC: 90,
    L: 50,
    XL:40,
    X: 10,
    IX: 9,
    V: 5,
    IV:4,
    I: 1
  }
  
  while (num){
    for (let key in dictionary){
      if (num-dictionary[key]>=0){
        num-=dictionary[key]
        newStr+=key
        break;
      }
    }
  }
return newStr
};

module.exports = { romanInteger };
