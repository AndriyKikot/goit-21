'use strict';

// // Функции высшего порядка - означает что мы в переменную можем записать функцию
// const smilyFace = function() {
//   console.log('😄'.repeat(8));
// }

// const starFace = function() {
//   console.log('🤩'.repeat(8));
// }
//
// // вместо callBack может быть любое другое название - это название параметра функции
// // важно понимать, что callBack должен быть функцией
// const introduceMyselfWithEmotion = function(name, callBack) {
//   console.log(`🔮 My name is ${name} 🔮`);

//   if(typeof callBack === 'function') {
//     callBack();
//   }
// }

// introduceMyselfWithEmotion('John', smilyFace);
// introduceMyselfWithEmotion('John', starFace);
// introduceMyselfWithEmotion('John', 55555); // 5555 - не функция соответственно 

const animals = [
  { icon: '😺', name: 'cat' },
  { icon: '🙈', name: 'monkey' },
  { icon: '🐕', name: 'dog' },
  { icon: '🦊', name: 'fox' },
];

// простая функция которая показывает в консоли каждый элемент массива
const logger = (array) => {
  for (let item of array) {
    console.log(item);
  }
}

// logger(animals);
// функция которая проходит по каждому элементу массива
// и на кажой итерации вызывает функцию callback
const findInArray = (array, callback) => {
  for (let item of array) {
    if (typeof callback !== 'function') {
      continue;
    }

    if(callback(item)) {
      return item;
    }
  }
}

const findFoxByName = (animal) => {
  const { name } = animal
  return name === 'fox';
}

const findFoxByIcon = (animal) => {
  const { icon } = animal
  return icon === '🦊';
}

// не надо так делать. При помощи колбеков избавится от копипаста
// const findFoxByIcon = (array) => {
//   for (let item of array) {
//     if(item.icon === '🦊') {
//       return item;
//     }
//   }
// }

// const foo = findInArray(animals, findFoxByName);
// console.log(foo);

// const bar = findInArray(animals, findFoxByIcon);

/* Замыкания */
const bar = () => {
  let foo = 0;
  return function() {
    console.log(foo += 1);
  }
}

// const fooz = bar();
// // как это выглядит после вызова bar(), но ссылка на переменную foo остается
// // const fooz = function() {
// //   console.log(foo += 1);
// // }
// fooz();
// fooz();
// fooz();
// fooz();
// fooz();

// Пример использования замыканий, для написания функции add
const add = (a, b) => {
  if(b !== undefined) {
    return a + b;
  }

  return function(b) {
    return a + b;
  }
}

console.log(add(1, ''));
console.log(add(1, 2));
console.log(add(1)(2));

/* Функция подсчета объема с использованием карирования и замыканий */

// без замыканий
// const calcObj = function(w, h, l) {
//   return w * h * l;
// }

const calcObj = function(w) {
  return function(h) {
    return function(l) {
      return w * h * l;
    }
  }
}
// короткая запись(карирования)
// const calcObj = w => h => l => w * h * l;

const objWithWidth = calcObj(10);
const objWithWidthAndHeight = objWithWidth(15);
console.log(objWithWidth(15)(20));
console.log(objWithWidthAndHeight(20));
console.log(calcObj(1)(3)(5));


