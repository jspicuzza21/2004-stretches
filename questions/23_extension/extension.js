//write a function that takes a function, and makes it callable with two invocations

const extensions = (func) => {
    if (typeof(func)!== 'function'){
        throw('Not a function')
    }
    
    return function newFunc (num) {
        if (typeof (num)!=='number'){
            throw('Not a number')
        }

        return function newFunc2(num2) {
            if (typeof (num2) !== 'number'){
                throw('Not a number')
            }
            return func(num, num2)
        }
    }

};
module.exports = { extensions };
