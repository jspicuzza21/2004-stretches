const axios = require('./axios');
//using the *fake* API-endpoint ... https://fullstack.com/api/cohort2004
//create a function that takes a student name and uses axios to hit the endpoint with a get request
//returning that specific student as specified in the test
//* you don't need to NPM i axios for this test... Only work within this file and use promises

const getStudent = (searchName) => {
  //code in here
  if (typeof(searchName)!=='string'){
    throw new Error()
  }

  return axios.get(`https://fullstack.com/api/cohort2004/`)
    .then( data=> {
      let newObj={count:0, student:''}
      newObj.length=data.data.length;

      //Didn't have enought time to finish
      for (let student in data) {
        if (data[student].name===searchName){
          newObj.student=[...data[student]]
        }        
      });

      if (newObj.student===''){
        newObj.student='no student found'
      }
      console.log(newObj)
      return newObj
    }).catch 
    ((error) => throw new Error(error))
    
};

module.exports = { getStudent };
