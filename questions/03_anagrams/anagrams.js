// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  for (let i=0; i<str1.length; i++){
    let currentLetter =str1[i]
    if (!str2.includes(currentLetter)){
      return false
    }
  }

  for (let i=0; i<str2.length; i++){
    let currentLetter =str2[i]
    if (!str1.includes(currentLetter)){
      return false
    }
  }

  return true
};

module.exports = { checkAnagrams };
