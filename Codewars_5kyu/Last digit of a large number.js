//Examples
//lastDigit("4", "1")            // returns 4
//lastDigit("4", "2")            // returns 6
//lastDigit("9", "7")            // returns 9    
//lastDigit("10","10000000000")  // returns 0

 function lastDigit(str1, str2){  
    let splited = str2.split('');
    while(splited.length >= 10){
        splited.shift();
    }
    let str3 = splited.join('')
    let lastDigit;
    let lastDigitFirstNum = str1.split('').pop()
   if (str2 === '0'){
    lastDigit = 1;
   } else if( str2 === '1'){
    lastDigit = Number(lastDigitFirstNum);
   }else if(lastDigitFirstNum === '0' ){
    lastDigit = 0;
   } else if (lastDigitFirstNum === '1'){
    lastDigit = 1;
   } else if (lastDigitFirstNum === '2'){
    if(Number(str3) % 4 === 0){
        lastDigit = 6;
    } else if (Number(str3) % 4 === 1){
        lastDigit = 2;
    } else if (Number(str3) % 4 === 2){
        lastDigit = 4;
    } else if (Number(str3) % 4 === 3){
        lastDigit = 8;
    }
   } else if (lastDigitFirstNum === '3'){
    if(Number(str3) % 4 === 0){
        lastDigit = 1;
    } else if (Number(str3) % 4 === 1){
        lastDigit = 3;
    } else if (Number(str3) % 4 === 2){
        lastDigit = 9;
    } else if (Number(str3) % 4 === 3){
        lastDigit = 7;
    }
  } else if (lastDigitFirstNum === '4'){
    if(Number(str3) % 2 === 0){
        lastDigit = 6;
    } else if (Number(str3) % 2 === 1){
        lastDigit = 4;
    }
}  else if (lastDigitFirstNum === '5'){
    lastDigit = 5;
 } else if (lastDigitFirstNum === '6'){
    lastDigit = 6;
 } else if (lastDigitFirstNum === '7'){
    if(Number(str3) % 4 === 0){
        lastDigit = 1;
    } else if (Number(str3) % 4 === 1){
        lastDigit = 7;
    } else if (Number(str3) % 4 === 2){
        lastDigit = 9;
    } else if (Number(str3) % 4 === 3){
        lastDigit = 3;
    }
  } else if (lastDigitFirstNum === '8'){
    if(Number(str3) % 4 === 0){
        lastDigit = 6;
    } else if (Number(str3) % 4 === 1){
        lastDigit = 8;
    } else if (Number(str3) % 4 === 2){
        lastDigit = 4;
    } else if (Number(str3) % 4 === 3){
        lastDigit = 2;
    }
  } else if (lastDigitFirstNum === '9'){
    if(Number(str3) % 2 === 0){
        lastDigit = 1;
    } else if (Number(str3) % 2 === 1){
        lastDigit = 9;
    }
}

return lastDigit
}
  lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")