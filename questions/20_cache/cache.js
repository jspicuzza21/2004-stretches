// see test specs
function cache(func) {
  // YOUR CODE

  if (typeof(func)!=='function'){
    throw ('Input must be a function.');
  }
  let cache={};

  return function(...arg){
    let previousArgs=Object.keys(cache);
    if (previousArgs.includes(arg+'')){
      return cache[arg]
    } else {
      const newArr = arg.map(element=>func(element*1))
      const result = newArr.reduce(function(sum, currentNum){
        return sum+=currentNum
        },0)
      cache[arg]=result;
      return result;
    }
  }

}

module.exports = { cache };
