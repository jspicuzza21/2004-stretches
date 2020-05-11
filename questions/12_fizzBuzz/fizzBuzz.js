const fizzBuzz = (num) => {
  //YOUR CODE HERE
  let arr=[]
  if (typeof(num)!=='number'||num<1) throw ('Enter a number')
  for (let i=0;i<num; i++){
    
    if (num%3===0 && num%5===0){
      arr.push('FizzBuzz')
    }
    else if (num%3===0){
      arr.push('Fizz')
    } else if (num%5===0){
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }

  return arr
};
module.exports = { fizzBuzz };
