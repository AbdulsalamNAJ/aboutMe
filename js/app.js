'use strict';



let mycar = prompt('do you know which my favorite car?');
console.log (mycar);

mycar.toLowerCase();

if (mycar === 'yes' || mycar === 'y')  {
 alert('answer correct');   
}else if (mycar === 'no' || mycar === 'n') {
    console.log('correct answer');
}else{
    alert('answer yes or no')
}
let myage = prompt('do you know what is my age?');
console.log(myage);
if (myage === 'yes' || myage === 'y') {
    alert('answer correct');   
   }else if (myage === 'no' || myage === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let mybook = prompt('do you know my book?');
console.log(mybook);
if (mybook === 'yes' || mybook === 'y') {
    alert('answer correct');   
   }else if (mybook === 'no' || mybook === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let mycontry = prompt('do you know my contry?');
console.log(mycontry);
if (mycontry === 'yes' || mycontry === 'y') {
    alert('answer correct');   
   }else if (mycontry === 'no' || mycontry === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let myfather = prompt('do you know what is my father name?');
console.log(myfather);
if (myfather === 'yes' || myfather === 'y') {
    alert('answer correct');   
   }else if (myfather === 'no' || myfather === 'n') {
       console.log('correct answer');
   }else{
    alert('answer yes or no')
   }

let mylevelcourse = prompt('what is my level course?');
let answer6=mylevelcourse;
let mycorrectlevelcourse = 3;
for (let i=0; i < 4; i++){
    if(answer6 == mycorrectlevelcourse){
        alert('correct answer');
        break;
    }else if(answer6 < mycorrectlevelcourse){
        answer6= prompt('too low');
    }else if (answer6> mycorrectlevelcourse){
        answer6= prompt('too high');
    } if(i>=4){
    alert('my level course 3');
    }
}

    let programminglanguages = ['html','css','javascript'];
console.log(programminglanguages);
for (let j=0; j<6; j++){
let guessmyprogramming = prompt('guess which my lovely progrmming language');
    if (guessmyprogramming == programminglanguages [0] || guessmyprogramming == programminglanguages[1]){
    alert('correct answer');
    break;
    }else if(guessmyprogramming !== programminglanguages ){
    alert('incorrect answer')
    }
    if(j>=6){
    alert('my lovely programming language  html and css');
    }
}
