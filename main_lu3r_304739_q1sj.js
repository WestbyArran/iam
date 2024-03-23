const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

71 / 53

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const isPalindrome = str => str === str.split("").reverse().join("");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
67,52,22,20,27,25,85,98,0,24,43,95,12,85,53,13,25,45,95,24,75,20,97,8,88,32,79,72,89,67,26,42,6,34,55,9,61,21,10,38,5,65,22,81,58,3,8,41,44,50,27,56,17,77,98,22,16,40,18,11,56,59,60,8,70,62,4,92,85,93,88,83,17,26,62,14,0,95,26,37,31,3,74,4,56,31,30,74,10,39,23,37,51,99,45 - 64,8,99,88,72,67,36,83,63,94,85,58,11,78,73

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const isPalindrome = str => str === str.split("").reverse().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

class MyClass { constructor() { this.property = getRandomString(); } }

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
