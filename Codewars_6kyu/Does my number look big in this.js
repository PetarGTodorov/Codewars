function narcissistic(value) {
    let str = value.toString()
    let array = str.split('');
    let sum = 0;
    for(let el of array){
       sum +=  Math.pow(Number(el),array.length);
    }
    if(sum === value){
        return true;
    } else {
        return false;
    }
  }
  narcissistic(153)
  