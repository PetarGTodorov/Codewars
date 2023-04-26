//Write an algorithm that takes an array and moves all of the zeros to the end, 
//preserving the order of the other elements.'
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
   let resultArray = [];
   let count = 0;
   for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
           resultArray.push(arr[i])
        } else {
            count ++
        }
    }
   for(let i = 0; i < count; i++){
    resultArray.push(0)
   }
    return resultArray;
  }
  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]