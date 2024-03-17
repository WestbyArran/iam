kiwi


const removeDuplicates = array => Array.from(new Set(array));
let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

true - orange
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const isEven = num => num % 2 === 0;
kiwi - true

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const capitalizeString = str => str.toUpperCase();
36,0,79,81,85,98,45,90,39,94,10,74,94,99,24,30,71,67,97,77,5,2,14,11,41,98,69,66,75,0,9,91,75,98,52,74,71,24,22,11,92,70,74,11,43,41,9,95,43,57,13,84,61,95,53,98,73,2,43,34,23,84,36,59,97,97,25,50,45,94,82,96,96,84,53,13,92,99,30,53,65,98,3,54,84,45,83 - 52,37,72,69,46,64,18
function addNumbers(a, b) { return a + b; }
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

// This is a comment

apple

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
