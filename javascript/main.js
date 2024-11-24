const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const royalty = 1000;

// console.log(item1 + loyalty);
// console.log(item2 + loyalty);
// console.log(item3 + loyalty);

// Functions
// function showPrice(price) {
//   // console.log(price + royalty);
//   return price + royalty;
// }

// const price1 = showPrice(item1);
// const price2 = showPrice(item2);
// const price3 = showPrice(item3);

// console.log(price1, price2, price3);

// 함수는 변수에 넣어서...
// const showPrice = function (price) {
//   return price + royalty;
// };

// console.log(showPrice(item1));
// console.log(showPrice(item2));
// console.log(showPrice(item3));

// 화살표 함수
// const showPrice = (price) => {
//   console.log(price + royalty);
// };

// showPrice(item1);
// showPrice(item2);
// showPrice(item3);

// 일반 함수와 화살표 함수의 차이점
// 일반 함수는 함수 실행의 위치가 아무것에서 실행 가능하나
// 화살표 함수는 함수 선언 뒤에서 실핼 되게 해야 함.
// showPrice1(item1);
// function showPrice1(price) {
//   console.log(price + royalty);
// }

// showPrice2(item1);
// Uncaught ReferenceError: Cannot access 'showPrice2' before initialization
// const showPrice2 = (price) => {
//   console.log(price + royalty);
// };
// showPrice2(item1);

// console.log(this);
const obj = {
  name: 'test',
  test1: function () {
    console.log(this);
  },
  test2: () => {
    console.log(this);
  },
};

// obj.test1();
// obj.test2();

const a = obj.test1;
const b = obj.test2;

a();
b();
