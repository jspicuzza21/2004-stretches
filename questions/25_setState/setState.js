// create a method called setState that updates the current state of the class

// DONT need to write your own tests for this stretch

class StatefulThing {
  constructor(initialState = {}) {
    this.state = initialState;
  }
  setState(obj) {
    let newState={};

    for (let key in this.state){
      newState[key]=this.state[key]
    }

    for (let key in obj){
      newState[key]= obj[key];
    }
    return newState;
  }
}

module.exports = { StatefulThing };
