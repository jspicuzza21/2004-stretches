/*
Digital root is the recursive sum of all the digits in a number.
ex.
16  -->  1 + 6 = 7
55555 --> 5 + 5 + 5 + 5 + 5 = 25 --> 2 + 5 --> 7 
*/

//YOUR CODE GOES HERE
class digitalRoot {
    constructor(){
        this.sum=0
    }
    root(num){
        if (num<10){
            return num;
        } else {
            num+=''
            let numArr=num.split('').map((currentNum)=>currentNum*=1)
            this.sum=numArr.reduce((accum, currentNum)=>{
            accum+currentNum}, 0);
            return this.root(this.sum)
        }
    }
}

module.exports = { digitalRoot };
