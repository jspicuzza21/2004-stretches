const decypher = (arg) => {
  //YOUR CODE HERE
    //YOUR CODE HERE
    let newStr=[];
    let str= arg.split(' ');
    const numbers ='1234567890';
    let secondLetter=''
  
    for (let i=0; i<str.length; i++){
      let currentWord=str[0];
      let currentDecryptedWord=[]
      for (let j=0; j<currentWord.length; j++){
          if(numbers.includes(currentWord[j])){
            continue
          } else if (!numbers.includes(currentWord[j]) && numbers.includes(currentWord[j-1])){
            let nums = currentWord.slice(0,j)
            //currentWord.split('').splice(0,j+1).join()
            currentDecryptedWord.push(String.fromCharCode(nums))
          } else if (numbers.includes(currentWord[j-2])){
            secondLetter=currentWord[j-2]
            currentDecryptedWord.push(currentWord[currentWord.length-1])
          } else if (j<currentWord.length-1){
            currentDecryptedWord.push(currentWord[j])
          } else {
            currentDecryptedWord.push(secondLetter)
          }
      }
      newStr.push(currentDecryptedWord.join(''))
    }
    return newStr.join('')
  };
module.exports = { decypher };
