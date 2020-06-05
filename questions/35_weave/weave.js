// weave should take any number of arrays and return a singular array of all arrays interwoven.
// if one array is longer than another place a null value in its allocated place
// weave([1, 2, 3], [4, 5]) === [1, 4, 2, 5, 3, null]

const weave = (...args) => {
  //enter code here
  const tempArr=args.slice()
  const sortedArr=tempArr.sort((a,b)=> a.length-b.length)
  const longestWord=sortedArr.slice(-1);
  args.forEach((element)=>{
    if(!Array.isArray(element)){
      throw new Error()
    }
  })

  let returnArr=[];

  for (let i=0; i<longestWord[0].length; i++){
    for (let j=0; j<args.length; j++){
      if(args[j][i]){
        returnArr.push(args[j][i])
      } else {
        returnArr.push(null)
      }
    }
  }
  return returnArr
};

module.exports = { weave };
