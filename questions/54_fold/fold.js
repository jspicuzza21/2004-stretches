const fold = (arr, num) => {
  let newArr=[]
  if (arr.length===1||num===0){
   return arr
  } else {
    newArr.push(fold(arr.slice(1,arr.length-1), num-1))
    newArr.push(arr[0] + arr[arr.length-1])
  }
  return newArr
};

module.exports = fold;
