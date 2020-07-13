const balanced = (arr) => {
  //YOUR CODE HERE
  for (let i=0; i< arr.length; i++){
    let currentNum= arr[i];
    let arr1 = arr.slice(0,i);
    let arr2= arr.slice(i+1);
    let arr1Sum= arr1.reduce((accum, current)=>{
      return accum = accum+=current
    },0)
    let arr2Sum= arr2.reduce((accum, current)=>{
      return accum = accum+=current
    },0)

    if(arr1Sum===arr2Sum) return i
  }

  return -1

};

module.exports = balanced;
