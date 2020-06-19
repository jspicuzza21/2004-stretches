const encryptString = (str, shift) => {
  // YOUR CODE
  const alphaDictionary='abcdefghijklmnopqrstuvwxyz'
  const capAlphaDictionary='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numDictionary='0123456789'

  function reduceLength(dictionary, currentIdx, shift){
    let num = Math.abs(shift)
    if (shift>0){
      while(currentIdx>dictionary.length){
        currentIdx=currentIdx-dictionary.length
      }
      return currentIdx
    } else {
      let remaining = num%26;
      return dictionary.length-remaining
    }
  }

  let newStr='';
  

  for (let i =0; i<str.length; i++){
    let currentLetter=str[i]
    if (alphaDictionary.includes(currentLetter)===false && capAlphaDictionary.includes(currentLetter)===false && numDictionary.includes(currentLetter)===false)throw new Error()

    if(alphaDictionary.includes(currentLetter)){
      let currentIdx=alphaDictionary.indexOf(currentLetter);
      let cypherIdx=currentIdx+shift
      if (Math.abs(cypherIdx) >alphaDictionary.length){
        cypherIdx = reduceLength(alphaDictionary, cypherIdx, shift)
      }
      newStr+=alphaDictionary[cypherIdx]
    } else if (capAlphaDictionary.includes(currentLetter)){
      let currentIdx=capAlphaDictionary.indexOf(currentLetter);
      let cypherIdx=currentIdx+shift
      if (Math.abs(cypherIdx) >capAlphaDictionary.length){
        cypherIdx = reduceLength(capAlphaDictionary, cypherIdx, shift)
      }
        newStr+=capAlphaDictionary[cypherIdx]
    } else {
      let currentIdx=numDictionary.indexOf(currentLetter);
      let cypherIdx=currentIdx+shift
      if (Math.abs(cypherIdx) >numDictionary.length){
        cypherIdx = reduceLength(numDictionary, cypherIdx, shift)
      }
        newStr+=numDictionary[cypherIdx]
    }
  }
  return newStr
};

module.exports = { encryptString };
