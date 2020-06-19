//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  //*****YOUR CODE STARTS HERE******
  expand(num, arr){
    this.capacity+=num;
    if (this.contents.length !== this.capacity) {
      arr.forEach(element=> {
        this.contents.push(new Box(element[0], element[1]))
      })
    } else {
      throw new Error('Capacity Met!');
    }
  }
  loot(idx){
    if(this.contents[idx]){
      return this.contents[idx]
    } else {
      const random = Math.floor(Math.random()*this.capacity)
      return this.contents[random]
    }
  }
}

module.exports = { Box };
