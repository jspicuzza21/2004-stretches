// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
  //write code here
  constructor(arr){
    this.input=arr.slice();
    this.idx=0;
  }

  next(){
    let returnVal={}
    if (!Array.isArray(this.input)){
      throw new Error ()
    }

    if (this.idx===this.input.length){
      return { done: true, value: undefined }
    } else {
      let returnVal= { done: false, value: this.input[this.idx]}
      this.idx=this.idx+1;
      return returnVal
    }
  }

}

module.exports = { Iterator };
