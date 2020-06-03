// diffTwo should return all pairs of integers from a given array of integers that have a difference of 2.
// the returning array of pairs should be sorted in ascending order of values.
//diffTwo([1, 2, 3, 4])=>[[1, 3], [2, 4]]

const diffTwo = (arr) => {
    if (!Array.isArray(arr)){
        throw new Error()
    }

    const newArr=[];

    arr.sort((a,b)=>a-b)

    arr.forEach(currentNum=>{
        for (let i=0; i<arr.length; i++){
            if (arr[i]-currentNum===2){
                newArr.push([currentNum,arr[i]])
            }
        }
    })

    return newArr
};

module.exports = { diffTwo };
