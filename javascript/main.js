// array
const animal = 'lion';
const animal2 = 'rabbit';

const animals = ['lion', 'rabbit', 'monkey', 'dog', 'cat'];

// animals[3] = 'cheeta';
// animals.push('tiger'); // 맨 뒤에
// animals.unshift('dog'); // 맨 앞에
// animals.pop(); // 맨 뒤에 뺴기

const fruits = 'apple, banana, strawberry';

// console.log(Array.isArray(animals));
// console.log(Array.isArray(fruits));

console.log(animals.indexOf('monkey'));
console.log(animals.indexOf('rabbit'));

// splice, slice
// splice
// animals.splice(animals.indexOf('monkey'), 3);
console.log(animals);
// slice
const slicedAnimal = animals.slice(0, 2);
console.log(slicedAnimal, animals);

// object
const monkey = {
  name: 'kiki',
  age: 5,
  weight: 40,
  gender: 'male',
  iscute: true,
  food: ['banana', 'carrot', 'potato'],
  home: {
    location: 'zoo',
    size: 'big',
    price: 3000,
  },
};

console.log(monkey);

monkey.gender = 'female';

console.log(monkey['name']);
console.log(monkey.weight);

// json
// console.log(monkey);
const monkeyJSON = JSON.stringify(monkey); // JSON 화
const parsedJSON = JSON.parse(monkeyJSON); // JSON 데이터를 사용해서 쓸 수 있도록 변환
console.log(parsedJSON);
