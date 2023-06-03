var longestPalindrome = function (s) {
  let longest = s[0];
  if (s.length < 2) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i + longest.length; j < s.length; j++) {
      let potential = s.slice(i, j + 1);
      if (isPal2(potential) && potential.length > longest.length) {
        longest = potential;
      }
    }
  }
  return longest;
};

var longestPalindrome = function (s) {
  //with dynamic programing
};

function startingWith(astring, anarray) {
  let middle = astring.length / 2;
  console.log(middle);
}

function isPal(astring) {
  if (astring.length < 2) {
    return true;
  } else {
    if (astring[0] === astring[astring.length - 1]) {
      let newString = astring.slice(1, astring.length - 1);
      //   console.log(newString);
      return isPal(newString);
    } else {
      return false;
    }
  }
}

function isPal2(astring) {
  return astring === astring.split('').reverse().join('');
}

// console.log(isPal2('pap'));
// console.log(isPal2('cool'));
// // console.log(isPal(''));
// // console.log(isPal('ppppp'));

// console.log(longestPalindrome('tyrant'));
// console.log(longestPalindrome('bob'));
// console.log(longestPalindrome('ac'));
// console.log(longestPalindrome('a'));

//// count and say

// function countAndSay(n) {
//   let saidNum = '1';
//   for (let i = 0; i < n - 1; i++) {
//     // let chunkList = splitUp(Number(saidNum), []);
//     console.log('countloop', saidNum);
//     console.log('countLoop', parseInt(saidNum, 10));
//     saidNum = say(saidNum);
//     // console.log(i, { saidNum });
//   }
//   return saidNum;
// }

// var say = function (n) {
//   const chunkList = splitUp(n, []);
//   let result = [];
//   for (let i = 0; i < chunkList.length; i++) {
//     result.push(chunkList[i].length);
//     result.push(chunkList[i][0]);
//   }
//   result = result.join('');
//   return result;
// };

// function takeChunk(num) {
//   //return chunk of same digits from begining of num
//   let numList = num.split('');
//   let chunk = [numList[0]];
//   for (let i = 1; i < numList.length; i++) {
//     if (numList[i] === numList[0]) {
//       chunk.push(numList[i]);
//     } else {
//       return chunk;
//     }
//   }
//   return chunk;
// }

// function splitUp(num, chunkList) {
//   if (num === '0' || num.length === 0) {
//     console.log(chunkList, 'flagged');
//     return chunkList;
//   }
//   if (num.length === 1) {
//     chunkList.push([num]);
//     return chunkList;
//   } else {
//     let chunk = takeChunk(num);
//     chunkList.push(chunk);
//     let numList = num.split('');
//     let newNum = numList.slice(chunk.length).join('');
//     return splitUp(newNum, chunkList);
//   }
// }

// console.log(takeChunk(11));
// console.log(takeChunk(123));
// console.log(takeChunk(11134));

// console.log(splitUp(11, []));
// console.log(splitUp(1234, []));
// console.log(splitUp(11112, []));

// yuris version

function say(astring) {
  let prevC = astring[0];
  let counter = 1;
  sayList = [];
  for (let i = 1; i < astring.length; i++) {
    if (astring[i] === prevC) {
      counter += 1;
      //   console.log({ counter });
      continue;
    } else {
      sayList.push(String(counter));
      sayList.push(prevC);
      prevC = astring[i];
      counter = 1;
    }
  }
  sayList.push(String(counter));
  sayList.push(prevC);
  return sayList.join('');
}
function countAndSay(n) {
  if (n === 1) {
    return '1';
  } else {
    return say(String(countAndSay(n - 1)));
  }
}

// console.log(say('11'));

// console.log(countAndSay(4));
// console.log(countAndSay(3));
// console.log('11131221133112132113212221'); //expected for 11

// console.log(countAndSay(11123));

///////////////////////
////////  letter combinations of phone numbers

var letterCombinations = function (digits) {
  /// i dont really get this
  if (digits === '') return [];
  var results = [];
  var array = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  var digits = Array.from(digits);

  function recursive(str, index) {
    if (str.length === digits.length) {
      results.push(str);
      return;
    }
    let candidates = Array.from(array[digits[index]]);
    candidates.forEach(function (i) {
      recursive(str + i, index + 1);
    });
  }
  recursive('', 0);
  return results;

  //   const numLetters = {
  //     2: ['a', 'b', 'c'],
  //     3: ['d', 'e', 'f'],
  //     4: ['g', 'h', 'i'],
  //     5: ['j', 'k', 'l'],
  //     6: ['m', 'n', 'o'],
  //     7: ['p', 'q', 'r', 's'],
  //     8: ['t', 'u', 'v'],
  //     9: ['w', 'x', 'y', 'z'],
  //   };

  //   let numOfCombinations = 1;
  //   console.log(numLetters[2][0]);

  //   for (let i = 0; i < digits.length; i++) {
  //     numOfCombinations *= numLetters[Number(digits[i])].length;
  //   }
  //   console.log(numOfCombinations);
  //   // for each combination possibility add letters until it is of proper lenght

  //   let result = [];

  //   let number = 2;
  //   for (let j = 0; j < numOfCombinations; j++) {
  //     for (let k = 0; k < numLetters[number].length; k++) {
  //       console.log(numLetters[j + 2][k]);
  //       result[j] += numLetters[j + 2][k];
  //     }
  //   }
};
// console.log(letterCombinations('23'));

var distributeCandies = function (candyType) {
  const types = new Set(candyType);
  const difTypes = types.size;

  let candyDict = {};
  for (var i = 0; i < candyType.length; ++i) {
    if (!candyDict[candyType[i]]) candyDict[candyType[i]] = 0;
    ++candyDict[candyType[i]];
  }
  console.log(candyDict);
  console.log({ difTypes });

  let nDiv2 = candyType.length / 2;
  console.log(nDiv2);
  let eatCounter = 0;

  for (let i = 0; i <= difTypes; i++) {
    if (eatCounter < nDiv2 && eatCounter < difTypes) {
      eatCounter += 1;
    } else {
      console.log(eatCounter);
      return eatCounter;
    }
  }
};

// console.log(distributeCandies([1, 1, 2, 3]));

var diagonalSum = function (mat) {
  // add from diagonal adn then change that number into a letter to prevent double adding
  let diagSum = 0;

  for (let i = 0; i < mat.length; i++) {
    diagSum += mat[i][i];
    mat[i][i] = 'x';
    if (typeof mat[i][mat.length - 1 - i] === 'number') {
      diagSum += mat[i][mat.length - 1 - i];
      mat[i][i] = 'x';
    }
    console.log(mat);
  }

  return diagSum;
};

// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// );

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

var dieSimulator = function (n, rollMax) {
  let minus = 0;

  for (let i = 0; i < rollMax.length; i++) {
    let temp = n - rollMax[i];
    if (temp > 0) {
      minus += temp;
    }
  }
  let total = 6 ** n;
  return total - minus;
};

// console.log(dieSimulator(2, [1, 1, 1, 1, 1, 1]));
// console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3]));

var generateParenthesis = function (n) {
  const result = [];
  firstSearch('', 0, 0);
  return result;
  function firstSearch(str, left, right) {
    if (left === n && right === n) {
      result.push(str);
      return;
    }
    if (left !== n) {
      firstSearch(str + '(', left + 1, right);
    }
    if (left > right) {
      firstSearch(str + ')', left, right + 1);
    }
  }
};

//generate all possibilities and then nix the bad ones

function genParen(n) {
  let paren = '';
  for (let i = 1; i < n ** 2; i++) {}
}

//turn a string into a number leaving out whitespace and letters
var myAtoi = function (s) {
  let neg = false;
  while (!Number(s[0])) {
    if (s[0] === '-') {
      neg = true;
    }
    s = s.substring(1);
  }
  console.log(s);
  let aNum = [];
  while (s[0] === '0' || Number(s[0]) > 0) {
    aNum.push(Number(s[0]));
    console.log(aNum);
    s = s.substring(1);
  }
  if (!Number(s[0]) || !s) {
    let final = aNum.join('');
    neg ? (final = 0 - final) : console.log('pos');
    return final;
  }

  return s;
};

//recursive rewrite

function myAtoi2(s) {
  let aNum = goThru(s, [], false);
  console.log(aNum[0]);
  let final = aNum[0].join('');
  if (aNum[1]) {
    final = 0 - final;
  }
  return Number(final);

  function goThru(s, aNum, neg) {
    if (!s) {
      return [aNum, neg];
    }

    if (s[0] === ' ') {
      return goThru(s.substring(1), aNum, neg);
    }
    if (s[0].match(/[a-z]/i)) {
      return goThru(s.substring(1), aNum, neg);
    }
    if (s[0] === '-') {
      neg = true;
      return goThru(s.substring(1), aNum, neg);
    }
    if (Number(s[0] >= 0)) {
      aNum.push(s[0]);
      return goThru(s.substring(1), aNum, neg);
    }
  }
}

// console.log(myAtoi2('  44'));
// console.log(myAtoi2('  44jjs'));

// console.log(myAtoi2('  44554'));
// console.log(myAtoi2('  -440  '));

/////------ MAXS PROBLEM --------
/// 100 ppl have tickets to a show, first person walks in and cant remmeber  which seat so they randomly pick one
/// each following person goes in sits in their assigned seat if available, if not they pick another at random
// when the 100th person walks in what are the chances their assigned seat is available

/// create a list [1...100] , randomly take away one, for the next 99 do the process

const ticketProb = () => {
  const ticketsOG = createTickets();

  const forgotTicket = Math.floor(Math.random() * ticketsOG.length - 1); /// probability they will pick the correct seat is 1%
  const pickASeatAtRandom = ticketsOG[forgotTicket];
  let seatsLeft = [
    ...ticketsOG.slice(0, forgotTicket),
    ...ticketsOG.slice(forgotTicket + 1),
  ]; // removes
  let personEntering = 1;
  let prob = 0.01; /// percent chance that the random person didnt take seat 99
  while (seatsLeft.length > 1) {
    seatsLeft,
      (prob = removeSeatAndReturnProb(
        seatsLeft,
        ticketsOG[personEntering],
        ticketsOG,
        prob
      ));
    personEntering += 1;
  }

  return prob;
};

const removeSeatAndReturnProb = (seatList, nextTicket, ticketsOG, prob) => {
  /// if next ticket is in seatList remove it and return seatList
  /// if not pick random and return seatList
  if (seatList.includes(ticketsOG[nextTicket])) {
    const index = seatList.indexOf(ticketsOG[nextTicket]);
    seatList.splice(index, 1);
  } else {
    const pickASeatAtRandom = Math.floor(Math.random() * seatList.length - 1);

    const addedProb = 1 / seatList.length;
    // console.log(addedProb);
    prob += addedProb;
    seatList.splice(pickASeatAtRandom, 1);
  }
  return seatList, prob;
};
const createTickets = () => {
  const list = [];

  for (let i = 0; i <= 99; i++) {
    list.push(i);
  }
  return list;
};
const run100 = () => {
  let prob = 0;
  for (let i = 0; i < 1000000; i++) {
    prob += ticketProb();
  }
  return prob / 1000000;
};

// console.log(run100());
/////////--------- got around 54%

//////
//implement binary sort
//find position of target value x within a sorted list
//list is ordered
const binarySort = (list, x) => {
  console.log('new sort ' + x);
  let target = Math.floor(list.length / 2);
  //move start and end
  let start = 0;
  let end = list.length - 1;
  while (list[target] !== x) {
    if (end - start === 1) {
      return 'not found';
    }
    if (list[target] <= x && x <= list[end]) {
      ///get index of next middle
      // get length of top half, divide by two, then add that to previous target index
      start = target; // new start
      let newTarget = Math.floor(list.slice(target, end).length / 2) + target;
      target = newTarget;
    } else if (list[start] <= x && x < list[target]) {
      console.log('lower');
      end = target; //new end
      target = Math.floor(list.slice(start, target).length / 2);
      console.log({ target });
    }
    if (list[target] === x) {
      return target;
    }
    if (list[start] === x) {
      return start;
    }
    if (list[end] === x) {
      return end;
    }
    console.log({ start });
    console.log({ end });
  }

  return target;
};

// console.log(binarySort([1, 2, 3, 4, 5], 3)); //2
// console.log(binarySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 9)); //8
// console.log(binarySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 1)); //0
// console.log(binarySort([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 5)); //4

//////---------coin denominations

/// given array of coin denominations and total amount
// return number of total combinations that make the total amount

/// iterate through array with index i
// with i , if array[i]< total add array[i] and so on to see if you get the total,
// if you go over then increment i
// do this with each element, going through whole array
// add any combos that work to list of working combinations
// check working combinations for duplicates
/// count and return

/// this is at least O^2 which sucks
const countCombos = (list, target) => {
  let workingList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target && !workingList.includes([list[i]])) {
      workingList.push(list[i]);
      continue;
    }
    let tempList = [list[i]];
    let temp = list[i];
    for (let j = 0; j < list.length; j++) {
      console.log({ tempList });
      if (temp + list[j] === target && !workingList.includes(tempList)) {
        tempList.push(list[j]);
        workingList.push(tempList);
        break;
      } else if (temp + list[j] < target) {
        tempList.push(list[j]);
        temp += list[j];
        i -= 1; // try that same number again before iterating
      } else if (temp + list[j] > target || workingList.includes(tempList)) {
        break;
      }
    }
  }
  console.log({ workingList });
  return workingList.length;
};

const check = (list, total) => {
  let checkTotal = 0;
  for (let i = 0; i < list.length; i++) {
    check += list[i];
  }
  return checkTotal === total ? true : false;
};

///add list i until you cant
const addUntilCant = (starting, next, currentList, target) => {
  if (starting + next <= target) {
    currentList.push(next);
    return currentList;
  } else return false;
};

// console.log(countCombos([1, 2, 5], 5)); //4
///alternate
//// generate a list of every combination of elements, order doesnt matter
/// [1,1,2,1] === [1,2,1,1]
// count how many add up to total

///fizbuzz
/// input a number
// count up to a number
// if number is divisible by 3 replace with fizz
//if number is divisible by 5 replace with buzz
// if both replace with fizzbuzz

const fizbuz = (num) => {
  for (let i = 1; i < num + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

// console.log(fizbuz(15));

//2621 Sleep
//given a positive integer millis, write an asyncronous function that sleep sfor millis milliseconds

async function sleep(millis) {
  return await setTimeout(() => {
    console.log('wait');
  }, 100);
}

////

var compose = function (functions) {
  return function (x) {
    let temp = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      temp = functions[i](temp);
      console.log(temp);
    }
    return temp;
  };
};

// console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]));

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (list, x) => {
  //move start and end
  let start = 0;
  let end = list.length - 1;
  let target = Math.floor(list.length / 2);
  while (list[target] !== x) {
    if (x < list[start] || x === list[start]) {
      return start;
    }
    if (x > list[end]) {
      return end + 1;
    }
    if (end - start === 1) {
      return start + 1;
    }
    if (list[target] <= x && x <= list[end]) {
      ///get index of next middle
      // get length of top half, divide by two, then add that to previous target index
      start = target; // new start
      let newTarget = Math.floor(list.slice(target, end).length / 2) + target;
      target = newTarget;
    } else if (list[start] <= x && x < list[target]) {
      end = target; //new end
      target = Math.floor(list.slice(start, target).length / 2);
    }
    if (list[target] === x) {
      return target;
    }

    if (list[end] === x) {
      return end;
    }
  }

  return target;
};

// console.log(searchInsert([1, 3, 5, 6], 5)); //2
// console.log(searchInsert([1, 3, 5, 6, 7], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 5)); // Expected output: 2
// console.log(searchInsert([1, 3, 5, 6, 7], 2)); // Expected output: 1
// console.log(searchInsert([1, 3, 5, 6, 7, 9], 0)); // Expected output: 0
// console.log(searchInsert([2, 4, 6, 8, 10], 11)); // Expected output: 5
// console.log(searchInsert([1, 3, 5, 7, 9], 8)); // Expected output: 4
// console.log(searchInsert([2, 4, 6, 8, 10], 7)); // Expected output: 3
// console.log(searchInsert([1, 3], 1)); // Expected output: 3

//////

//   Given an integer n, return a counter function.
//   This counter function initially returns n and then
//   returns 1 more than the previous value every subsequent
//   time it is called (n, n + 1, n + 2, etc).

var createCounter = function (n) {
  console.log('creating');
  let x = n;
  return function () {
    console.log(x);
    const returnValue = x;
    x += 1;
    return returnValue;
  };
};

// const counter = createCounter(10);
// counter(); //10
// counter(); //11
// counter(); //12

var filter = function (arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
//////

var fibGenerator = function* () {
  let current = 0;
  let next;
  while (true) {
    yield current;
    current = next;
    next = current + next;
  }
};
///////////
function getCommonKeys(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const commonKeys = keys1.filter((key) => keys2.includes(key));

  return commonKeys;
}
function areEmptyArrays(arr1, arr2) {
  return arr1.length === 0 && arr2.length === 0;
}
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// function objDiff(obj1, obj2) {
//   // make list of all keys
//   const keys = getCommonKeys(obj1, obj2);
//   let returnDict = {};
//   for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//     console.log(typeof obj1[keys[i]]);
//     // if (
//     //   typeof obj1[keys[i]] === 'array' &&
//     //   obj1[keys[i]].length === 0 &&
//     //   obj2[keys[i]].length === 0
//     // ) {
//     //   console.log('both empty strings');
//     //   console.log(keys[i]);
//     //   continue;
//     // } else
//     if (obj1[keys[i]] !== obj2[keys[i]]) {
//       if (Array.isArray(obj1[keys[i]]) && Array.isArray(obj2[keys[i]])) {
//         if (areArraysEqual(obj1[keys[i]], obj2[keys[i]])) {
//           continue;
//         }
//         returnDict[keys[i]] = buildDictOfDifsFromArrays(
//           obj1[keys[i]],
//           obj2[keys[i]],
//           {}
//         );
//       }
//       if (
//         Object.prototype.toString.call(obj1[keys[i]]) === '[object Object]' &&
//         Object.prototype.toString.call(obj2[keys[i]]) === '[object Object]'
//       ) {
//         // else if ()

//         returnDict[keys[i]] = objDiff(obj1[keys[i]], obj2[keys[i]]);
//       } else {
//         returnDict[keys[i]] = [obj1[keys[i]], obj2[keys[i]]];
//       }
//     }
//   }
//   return returnDict;
// }

function objDiff(obj1, obj2) {
  let one = obj1;
  let two = obj2;
  let three = {};
  const keys = getCommonKeys(obj1, obj2);
  for (let i = 0; i < keys.length; i++) {
    three[keys[i]] = compareValues(one[keys[i]], two[keys[i]]);
  }
  return three;
}

//returns values for three dict
const compareValues = (x, y) => {
  //if both are lists
  if (Array.isArray(x) && Array.isArray(y)) {
    console.log({ x, y });
    if (areArraysEqual(x, y)) {
      return;
    } else {
      return buildDictOfDifsFromArrays(x, y, {});
    }
  }

  //if both are objects
  else if (
    Object.prototype.toString.call(x) === '[object Object]' &&
    Object.prototype.toString.call(y) === '[object Object]'
  ) {
    return objDiff(x, y);
  }

  // if both are the same
  else if (x === y) {
    return;
  }
  // if both dif
  return [x, y];
};

// console.log(
//   objDiff(
//     { a: 1, v: 3, x: [], z: { a: null } },
//     { a: 2, v: 4, x: [], z: { a: 2 } }
//   )
// );
// console.log(
//   objDiff(
//     { a: 5, v: 6, z: [1, 2, 4, [2, 5, 7]] },
//     { a: 5, v: 7, z: [1, 2, 3, [1]] }
//   )
// );

// console.log(objDiff({}, { a: 1, b: 2 }));

// returns keys/indexs and arrays of differences
const buildDictOfDifsFromArrays = (arr1, arr2) => {
  // check if arrays are empty
  if (arr1.length === 0 && arr2.length === 0) {
    return;
  }

  //initialize return dict
  let returnDict = {};

  let shorterList;
  let longerList;
  arr1.length > arr2.length
    ? (shorterList = arr2.length)
    : (shorterList = arr1.length);

  for (let i = 0; i < shorterList; i++) {
    //if array then go recursive
    if (arr1[i] !== arr2[i]) {
      returnDict[i] = [arr1[i], arr2[i]];
    }
  }
  return returnDict;
};

// console.log(buildDictOfDifsFromArrays([1, 2, 3], [1, 1, 3, 4]));

//Climbing Stairs

var climbStairs = function (n) {
  let cache = {};
  console.log({ n });

  const recursive = (n, cache) => {
    const keys = Object.keys(cache);
    console.log({ keys });
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    } else if (keys.includes(n.toString())) {
      console.log({ cache });
      return cache[n];
    } //check if n is in cache
    else {
      const returned = recursive(n - 1, cache) + recursive(n - 2, cache);
      cache[n] = returned;
      // console.log({ cache });
      return returned;
    }
  };
  return recursive(n, cache);
};

// console.log(climbStairs(45));

// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  let alone = [];

  for (let i = 0; i < nums.length; i++) {
    //if value is not in dict
    const index = alone.indexOf(nums[i]);
    if (index !== -1) {
      alone.splice(index, 1);
    } else {
      alone.push(nums[i]);
    }
  }
  return alone[0];
};

// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));

var reverse = function (x) {
  let aString = x.toString();

  let asArray = aString.split();

  let newArray = [];
  for (let i = asArray.length - 1; i >= 0; i--) {
    newArray.push(asArray[i]);
  }
  let newString = newArray.join();
  return Number(newString);
};

///////////////
// var plusOne = function (digits) {
//   if (digits.length === 1 && digits[digits.length - 1] === 9) {
//     return [1, 0];
//   }
//   digits[digits.length - 1] += 1;
//   for (let i = digits.length - 1; i >= 0; i--) {
//     console.log(digits[i]);
//     if (i===0 &&digits[i]===10)
//     digits = increment(digits, i);
//   }
//   return digits;
// };

const increment = (list, index) => {
  /// take in list and index at which its 9
  //increment value by 1 and splice in 0
  //check if the next value was 9 in which case do it again

  if (list[index - 1] === 9) {
    return increment(list[index - 1]);
  } else if (list[index] === 9) {
    if (list[index - 1]) {
      list[index - 1] += 1;
      list[index] = 0;
    } else {
      list[index] = 1;
      list.push(0);
    }
  }

  if (list[index] === 10) {
    console.log('ten');
    list[index - 1] += 1;
    list[index] = 0;
  }
  return list;
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      if (i === 0) {
        digits[i] = 1;
        digits.push(0);
      } else {
        if (digits[i - 1] === 9) {
          digits[i] = 0;
        } else {
          digits[i - 1] += 1;
          digits[i] = 0;
          return digits;
        }
      }
    } else if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }
  }
  return digits;
};
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([1, 2, 3, 9, 9]));
// console.log(plusOne([9]));

var isHappy = function (n) {
  let path = [n];

  while (path[path.length - 1] !== 1) {
    let newNum = recursive(path[path.length - 1]);
    path.push(newNum);
    console.log(path);

    //if there is a repeating pattern then give up
    if (path.length > 1 && findPattern(path)) {
      return false;
    }
  }
  return true;
};
const findPattern = (list) => {
  console.log({ list });
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] === list[list.length - 1]) {
      return true;
    }
  }
  return false;
};

const recursive = (n) => {
  const integerStr = String(n);

  // Split the string into an array of characters, and map each character to an integer
  let newNum = 0;
  const digits = integerStr.split('').map(Number);
  for (let i = 0; i < digits.length; i++) {
    newNum += digits[i] * digits[i];
  }
  return newNum;
};

// console.log(isHappy(2));
// console.log(isHappy(1));
// console.log(isHappy(19));

/////////////
// phone number letter combinations

//// have not finished
var letterCombinations = function (digits) {
  const phoneDict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let result = [];

  let numArr = digits.split('');
  console.log({ numArr });
  let totalArrang;
  digits.length ? (totalArrang = 1) : (totalArrang = 0);
  if (totalArrang === 0) {
    return 0;
  }
  for (let i = 0; i < numArr.length; i++) {
    let digit = parseInt(numArr[i], 10);
    totalArrang *= phoneDict[numArr[i]].length;
  }
  for (let i = 0; i < totalArrang; i++) {
    result.push([]);
  }
  for (let j = 0; j < numArr.length; j++) {
    for (let i = 0; i < phoneDict[numArr[j]].length; i++) {}
  }

  for (let i = 0; i < totalArrang; i++) {}
};

// console.log(letterCombinations('2'));
// console.log(letterCombinations('23'));
// console.log(letterCombinations(''));

/// majority element

// var majorityElement = function (nums) {
//   let numDict = {};
//   for (let num of nums) {
//     let x = String(num);
//     if (Object.keys(numDict).includes(x)) {
//       numDict[x] = numDict[x] + 1;
//     } else {
//       numDict[x] = 1;
//     }
//     if (nums.length / 2 <= numDict[x]) {
//       return num;
//     }
//   }
//   return;
// };
var majorityElement = function (nums) {
  let numDict = {};
  let result = 'error';

  nums.map((num) => {
    let x = String(num);
    if (Object.keys(numDict).includes(x)) {
      numDict[x] = numDict[x] + 1;
    } else {
      numDict[x] = 1;
    }
    if (nums.length / 2 <= numDict[x]) {
      result = num;
    }
  });

  return result;
};

// console.log(majorityElement([3, 2, 3]));

/// movezeros

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] !== 0) {
          nums[i] = nums[j];
          nums[j] = nums[i];
          break;
        }
      }
    }
  }
  return nums;
};

//recursive version

// console.log(moveZeroes([0, 1, 0, 3, 12]));

/////is subsewuence

var isSubsequence = function (s, t) {
  let subIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[subIndex]) {
      subIndex += 1;
    }
  }
  if (subIndex === s.length) {
    return true;
  }
  return false;
};
// console.log(isSubsequence('axc', 'ahbgdc'));
// console.log(isSubsequence('abc', 'ahbgdc'));

// can place flowers

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      n -= 1;
      i += 1;
    }
  }
  if (n <= 0) {
    return true;
  }
  return false;
};

// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));

// var missingNumber = function (nums) {
//   nums.sort((a, b) => a - b); ///O(nlogn)
//   console.log(nums);

//   for (let i = 0; i < nums.length + 1; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
// };

//faster clever version
var missingNumber = function (nums) {
  let numsTotal = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    numsTotal += nums[i];
    total += i;
  }
  total += nums.length;

  return total - numsTotal;
};

// console.log(
//   missingNumber([
//     45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
//     4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
//     30, 25, 47, 0, 31, 42, 24, 10, 14,
//   ])
// );

/// ransom note
// O(n)
var canConstruct = function (ransomNote, magazine) {
  let magList = magazine.split('');
  let ransomList = ransomNote.split('');
  for (let i = 0; i < ransomList.length; i++) {
    if (magList.includes(ransomList[i])) {
      const firstIndex = magList.indexOf(ransomList[i]);
      magList.splice(firstIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

///
// O(n)

var fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(String(i));
    }
  }
  return result;
};


//swuares of a sorted array

//first id create a new array of the squared numbers in the same order, then perform a sort
// js sort is O(nlogn)

var sortedSquares = function(nums)
