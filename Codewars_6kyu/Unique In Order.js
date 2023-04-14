//  DESCRIPTION:
//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without,
// Any elements with the same value next to each other and preserving the original order of elements.

//For example:
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]
function uniqueInOrder(iterable){
    let finalArray = [];
    if(typeof iterable === 'string'){
        let iterableArray = iterable.split('');
        for(let i = 0; i < iterableArray.length; i ++){
            if(iterableArray[i] !== iterableArray[i+1]){
                finalArray.push(iterableArray[i])
            }
        }
    } else if (typeof iterable === 'object'){
        for(let i = 0; i < iterable.length; i ++){
            if(iterable[i] !== iterable[i+1]){
                finalArray.push(iterable[i])
            }
        }
    }
    return finalArray
  }
  uniqueInOrder([1,2,2,3,3])

