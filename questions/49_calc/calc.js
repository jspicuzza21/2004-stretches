// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  //write code here
  constructor(num){
    if (typeof num !== 'number') throw new Error();
    this.total=num
    this.result
  }

  add(addNum){
    this.result=this.total+addNum;
    this.total=this.total+addNum;
    return this
  }

  sub(subNum){
    this.result=this.total-subNum;
    this.total=this.total-subNum;
    return this
  }

  mul(multNum){
    this.result=this.total*multNum;
    this.total=this.total*multNum;
    return this
  }

  
}


module.exports = { chainCalc };
