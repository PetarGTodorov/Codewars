//DESCRIPTION:
//The goal of this exercise is to convert a string to a new string where each character in the 
//new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.
//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

function duplicateEncode(word){
    let resultArr =[];
    word = word.toLowerCase();
  let array = word.split('');
  for(let i = 0; i < array.length; i++){
    let current = array[i];
    let token = array.shift(current);
    if(array.includes(token)){
      resultArr.push('1');
    } else {
        resultArr.push('0');
    }
    array.push(token);
  }
 let newWord = resultArr.join('');
    for(let ch of newWord){
        if(ch === '1'){
           newWord = newWord.replace(ch, ')');
        } else {
            newWord = newWord.replace(ch, '(');
        }
}
return newWord
}
