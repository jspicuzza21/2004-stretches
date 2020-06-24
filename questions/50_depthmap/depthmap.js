//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj, count=0) => {
  //write code here
  let returnObj={};
  if (typeof(obj)!=='object' || Array.isArray(obj)) throw new Error()

  for (let key in obj){
    returnObj.depth=count
    if(typeof(obj[key])==='object'){
      recordDepth(obj[key], count++)
    }
  }
  return returnObj
};

module.exports = { recordDepth };
