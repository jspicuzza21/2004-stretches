// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
  const arr=[]
 
  for (let i=0; i<n; i++){
    arr.push(func())
  }

  return arr
};

// see test specs to complete this stretch

module.exports = { repeater };
