/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sortKey, sortVal){
  if (typeof(arr[0][sortKey])==='number'){
     arr.sort((a,b)=> a[sortKey]-b[sortKey])
 }
  else {
     arr.sort((a,b)=> {
      
       if (a[sortKey]<b[sortKey]){
           return -1
         }
       else {
         return 1
       }
     })
   }
   return arr.map(element => element[sortVal])
 }

module.exports = { sortOrder };
