const moveZeroes = (arr) => {
  let zeroCount=0;
  for (let i=0; i<arr.length; i++){
    if (arr[i]===0){
      arr.splice(i, 1)
      i--
      zeroCount++
    }
  }
  for (let j=0; j<zeroCount; j++){
    arr.unshift(0)
  }
  return arr
};

module.exports = { moveZeroes };
