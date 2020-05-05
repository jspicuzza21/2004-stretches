/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  // YOUR CODE

  let newObj={}

  objs.forEach(element => {
    let currentKeys = Object.keys(newObj)
    for (let key in element){
      if (currentKeys.includes(key)){
        newObj[key]+=element[key]
      } else {
        newObj[key]=element[key]
      }
    }
  });
return newObj
}

module.exports = { zip };
