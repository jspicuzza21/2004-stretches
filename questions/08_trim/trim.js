// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // YOUR CODE
  let newObj={}

    for (let key in obj){
      if (obj[key]!=undefined || obj[key]!= null){
        newObj[key]= obj[key]
      }
    }
  return newObj
};

module.exports = { trim };
