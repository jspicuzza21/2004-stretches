//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  //code in here
  let str=''
  let returnObj={}

  for (let key in obj){
    let currentElement = obj[key];
    str+=key;
    if (typeof(currentElement==='object')){
      return str+= `/${directory(currentElement)}`;
    } else {
      returnObj.str=currentElement;
      break;
    }
  }
  return returnObj;
};


module.exports = { directory };
