//write the splatter function

const splatter = (...args) => {
  //write code here
   return args.reduce((sum, obj)=>{
     Object.values(obj).forEach((value)=>{
       sum+=value
     })
     return sum
   }, 0)
};

module.exports = { splatter };
