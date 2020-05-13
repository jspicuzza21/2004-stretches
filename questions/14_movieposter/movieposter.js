//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  //write code here
  let newArr=[]
  let top =''
  let bottom=''
  let longestWord=''

  for (let i=0; i<arr.length; i++){
    if (arr[i].length>longestWord.length){
      longestWord=arr[i]
    }
  }
  for(let n=0; n<longestWord.length+3; n++){
    top+='*'
  }
  newArr.push(top)
  for (let i=0; i<arr.length; i++){
    let currentStr=`* ${arr[i]}`
    for (let j=arr[i].length; j<longestWord.length+1; j++){
      currentStr+=' '
    }
    currentStr+='*'
    newArr.push(currentStr)
  }
  
  for(let n=0; n<longestWord.length+3; n++){
    bottom+='*'
  }
  
  newArr.push(bottom)
  return newArr.join('\n')
};

module.exports = { movieposter };
