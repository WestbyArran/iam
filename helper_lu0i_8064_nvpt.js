const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi


const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

console.log(getRandomString());
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

49 / 8
const fetchData = async url => { const response = await fetch(url); return response.json(); }

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

let array = getRandomArray(); array.forEach(item => console.log(item));
let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi


const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
60 / true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
grape / banana

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
grape

function addNumbers(a, b) { return a + b; }
42,95,95,58,78 - 3,86,20,57,92,28,54,24,55,30,44,1,31,96,8,29,51,47,93
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
41 - orange

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let result = performOperation(getRandomNumber(), getRandomNumber());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

kiwi * 93
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const getRandomIndex = array => Math.floor(Math.random() * array.length);

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
apple + false

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

let array = getRandomArray(); array.forEach(item => console.log(item));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true + true
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

function addNumbers(a, b) { return a + b; }
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
33,18,27,35,59,21,54,69,18,25,34,68,85,95,44,63,51,28,13,42,16,14,86,74,86,65,63,42,95,14,62,18,82,17,40,22,94 - apple
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
true + false
const fetchData = async url => { const response = await fetch(url); return response.json(); }
kiwi + grape
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
36 - false
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
20,77,94,23,83,60,79,44,84,64,97,97,11,2,69,77,9,1,60,85,56,15,77,6,11,74,93,75,35,7,9,99,5,55,21,19,21,70,67,74,40,74,90,6,53,7,8,61,43,83,80,37,86,96,94,81,28,87,26,89,99,38,94,68,94 * true

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

