// var, let , const

// string, Number, boolean, numm, undefined
const name = 'tong';
const age = 30;
const isMale = true;
const isFemale = false;
let money = null;
let girlFriend = undefined;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMale);
console.log(typeof money);
console.log(typeof girlFriend);

console.log(name, age, isMale);

console.log('My name is ' + name + ' and i am ' + age);
console.log(`내 이름은 ${name} 이고 나이는 ${age} 입ㅣ다.`);

const animal = 'tiger';

console.log(animal);
console.log(animal.substring(0, 2));
console.log(animal.substring(2, 5));

let fruits = '사과, 딸기, 포도, 참외';
fruits = fruits.split(', ');
console.log(fruits[2]);
