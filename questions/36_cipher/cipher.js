const encrypt = (arg) => {
  //YOUR CODE HERE
  let newStr=[];
  let str= arg.split(' ');

  for (let i=0; i<str.length; i++){
    let currentWord=str[0];
    let currentEncryptedWord=[]
    for (let j=0; j<currentWord.length; j++){
      if(j===0){
        currentEncryptedWord.push(currentWord.charCodeAt(currentWord[j]))
      } else if (j===1){
        currentEncryptedWord.push(currentWord[currentWord.length-1]);

      } else if (j < currentWord.length-1){
        currentEncryptedWord.push(currentWord[j])
      } else {
        currentEncryptedWord.push(currentWord[1])
      }
    }
    newStr.push(currentEncryptedWord.join(''))
  }
  return newStr.join('')
};

module.exports = { encrypt };
