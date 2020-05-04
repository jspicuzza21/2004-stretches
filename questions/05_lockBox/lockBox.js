const lockBox = (newCode, secretMessage) => {
  // write code here
    if (typeof(newCode) !== 'message' || typeof(secretMessage !== 'string')){
      throw('Invalid Inputs')
    }
    
    let code=code;
    let message=message;

    return {
        modCode=function (oldCode, newCode){
          if (code===oldCode){
            code=newCode
          } else {
            throw('Invalid Code')
          }
          return code
        },

        modMessage=function (passcode, newMsg){
          if (passcode=== code){
            message=newMsg
          } else {
            throw('Invalid Code')
          }
          return message
        },

      revealMessage=function (codeInput){
        if(codeInput===code){
          return message;
        } else {
          throw('Wrong code')
        }
      }
  }

    

    lockBox.prototype.
return 
};

module.exports = { lockBox };
