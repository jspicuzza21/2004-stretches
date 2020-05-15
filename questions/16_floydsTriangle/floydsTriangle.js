// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
    let arr=[]
    let numberToAdd=1;
    let previousEntry=''
    while (arr.length!==n){
        if (arr.length!==0){
          previousEntry=arr[arr.length-1]
        }
        let innerArr=[]
        for (let i=0; i<previousEntry.length+1; i++){
            innerArr.push(numberToAdd)
            numberToAdd++
        }
        arr.push(innerArr)
    }
    return arr.join('\n').replace(/,/g, '')
}

module.exports = { floydsTriangle };
