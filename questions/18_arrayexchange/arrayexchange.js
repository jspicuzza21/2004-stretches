//arrayexchange should exchange the elements of two arrays in-place in a way that their new content is also reversed.
//restricted use: reverse()

const arrayexchange = (arr1, arr2) => {
    if (!Array.isArray(arr1)||!Array.isArray(arr2)){
      throw new Error;
    }
    
    let tempArr=[];
    let arr1Length=arr1.length
    let arr2Length=arr2.length
    
    for (let i=0; i<arr1Length; i++){
      tempArr.push(arr1.pop())
    }
  
    for (let i=0; i<arr2Length; i++){
      arr1.push(arr2.pop())
    }
    
    let tempLength=tempArr.length;  
    for (let i=0; i<tempLength; i++){
      arr2.push(tempArr.shift())
    }
  
  };

module.exports = { arrayexchange };
