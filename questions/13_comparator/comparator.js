//write a func that takes two arg... selectKey and obj

const comparator = (sorter, objArr) => {
    const keys= Object.keys(objArr[0])
    if (!keys.includes(sorter)){
        throw('key is not present')
    }

    return objArr.sort((a,b)=>{

        if (typeof(a[sorter])==='number'){
            return a[sorter]-b[sorter];
        }

        else{
            if (a[sorter].split(' ')[1] < b[sorter].split(' ')[1]){
                return -1;
            }
            else if (a[sorter].split(' ')[1] > b[sorter].split(' ')[1]){
                return 1;
            }
        }

    })
};


module.exports = { comparator };
