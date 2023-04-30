//Write a function, which takes a non-negative integer (seconds)
// as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable (seconds) {
 let hour = 0;
 let min = 0;
 while(seconds >= 0){
 if(seconds - 3600 >= 0){
    hour ++;
    seconds -= 3600;
 } else if (seconds - 60 >= 0){
    min++;
    seconds -= 60;
 } else if ( seconds < 60){
    break;
 }
}
 let sec = seconds;
 if(hour < 10){
    hour = `0${hour}`
 }
if (min < 10){
    min = `0${min}`
}
if(sec < 10){
    sec = `0${sec}`
}
let result = `${hour}:${min}:${sec}`
    return result ;
  }
  humanReadable(3600)