console.log('Hello JavaScript');

// variables
let a = 1;
console.log(a);

// array
const array = ['alice', 'bob', 'carol'];
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const array2 = [];
while (array2.length < 2) {
  array2.push(0);
}
console.log(array2);

// if else
const cond = true;

if (cond) {
  console.log('true');
} else {
  console.log('false');
}

if (a % 2 === 1) {
  console.log('a is odd');
} else {
  console.log('a is even');
}

if (null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy');
}

// function
function add1(v1, v2) {
  return v1 + v2;
}

const result1 = add1(1, 2);
console.log(`result1 = ${result1}`);

const add2 = function (v1, v2) {
  return v1 + v2;
};

const result2 = add2(1, 2);
console.log(`result2 = ${result2}`);

const add3 = (v1, v2) => {
  return v1 + v2;
};

const result3 = add3(1, 2);
console.log(`result3 = ${result3}`);

// callback
function calculate(v1, v2, callback) {
  return callback(v1, v2);
}

const addResult = calculate(1, 2, add1);
console.log(addResult);

function multiply(v1, v2) {
  return v1 * v2;
}

const multiplyResult = calculate(1, 2, multiply);
console.log(multiplyResult);

const hello = () => {
  console.log('hello');
};

// setTimeout(() => {
//   console.log('hello');
// }, 5000);

// dom
const predictButtonElement = document.getElementById('predict-button');
console.log(predictButtonElement);

predictButtonElement.addEventListener('click', () => {
  const textInputElement = document.getElementById('text-input');
  const input = textInputElement.value;

  const messageElement = document.getElementById('message');
  messageElement.innerText = `入力内容は${input}で、推論結果はaaaでした。`;
});
