const findBy = (arr, searchKey, searchVal) => {
  //YOUR CODE HERE

  return arr.find(function(currentVal, idx){
    return currentVal[searchKey]===searchVal
  })
};

module.exports = { findBy };
