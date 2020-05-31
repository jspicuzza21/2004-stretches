// B-Town bakery over-bought the supplies to make cake and needs to know how many they can make all together.

const btownbake = (recipe, supplies) => {
  //enter code here
  if (typeof(recipe)!== 'object' || typeof(supplies)!== 'object'){
    throw('Error')
  }

  let numCakes=0;
  let moreIngredients=true

while(moreIngredients){
  for (let ingredient in recipe){
    if (supplies[ingredient] - recipe[ingredient]>0){
      supplies[ingredient]-=recipe[ingredient];
    } else {
      moreIngredients=false;
      return numCakes;
    }
  }
    numCakes++
}
};

module.exports = { btownbake };
