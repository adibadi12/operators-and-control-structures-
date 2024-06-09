
//Conditional statements
let num = 33;
if (num > 0){
  console.log('positive');
} else if (num < 0){
  console.log('negative');
}else {
  console.log('Zero');
}

// Looping statements
for(let i=0; i<5; i++){
  console.log(i);
}

// Jump statements
let fruits = ['Apple', 'Banana', 'Orange'];
for(let fruit of fruits){
  if(fruit=== 'Banana'){
    break;
  }
  console.log(fruit);
}

for(let i = 0; i < 10; i++){
  console.log(i);
  if (i===5){
   continue;
  }
}

let x = 33;
let y = 3;
let sum = x * y;
console.log (sum)

let a = 12;
let K = 4;
let isEqual = (a==K);
console.log(isEqual)

let OnepieceIsBetter = true;
let NarutoIsBetter = false;
let TheTruth = OnepieceIsBetter && NarutoIsBetter;
console.log (TheTruth)

let G = 56;
let isNegative = -G;
console.log (isNegative);

let age=19;
let status = (age>= 18) ? 'Adult' : 'Minor';
console.log(status);

let grade = 'B';

switch(grade){
  case'A':
  console.log('Execellent!');
  break;
  case 'B':
  console.log('Good job!')
  break;
  case'C':
  console.log('Well done ;)')
  break;
  case'D':
  console.log('You passed.');
  break;
  case'F':
  console.log('Better try again.');
  break;
  default:
    console.log('Invalid grade');



}

let person = {Name: 'Adrian', age: 18, city: 'Bergen'};
for (let key in person) {
  console.log(key + ':', person[key]);
}





