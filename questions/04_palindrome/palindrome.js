/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  let secondIdx=str.length-1;

  for (var i=0; i<str.length; i++){
      if (str[i]===str[secondIdx]){
        secondIdx--
      } else {
        return false
      }
  }
 //console.log('b')
return true
};

module.exports = { validPalindrome };
