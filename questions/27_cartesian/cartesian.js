const cartesian = (arr) => {
  //YOUR CODE GOES HERE

  const directions ={
    n:0,
    s:0,
    e:0,
    w:0
  }

  arr.forEach(direction => {
    directions[direction]=directions[direction]+1
  });

  const NS = Math.min(directions.n, directions.s);
  const EW= Math.min(directions.e, directions.w);
  directions.n-=NS;
  directions.s-=NS;
  directions.e-=EW;
  directions.w-=EW;

  if (directions.n===directions.s && directions.e===directions.w){
    return "These directions don't go anywhere!"
  }

  return directions;

};

module.exports = { cartesian };
