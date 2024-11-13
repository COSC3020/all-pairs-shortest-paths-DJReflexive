import { allPairsShortestPaths } from "./code.js";


    /* Unit Testing */

const graph0 = [
    [0]
];
const expected0 = [
    [0]
];

const graph1 = [
    [0, 1, 4],
    [1, 0, 2],
    [4, 2, 0]
];
const expected1 = [
    [0, 1, 3],
    [1, 0, 2],
    [3, 2, 0]
];

const graph2 = [
    [0, Infinity, Infinity],
    [Infinity, 0, Infinity],
    [Infinity, Infinity, 0]
];
const expected2 = [
    [0, Infinity, Infinity],
    [Infinity, 0, Infinity],
    [Infinity, Infinity, 0]
];

const graph3 = [
    [0, 1, 5, Infinity],
    [1, 0, 2, 1],
    [5, 2, 0, 2],
    [Infinity, 1, 2, 0]
];
const expected3 = [
    [0, 1, 3, 2],
    [1, 0, 2, 1],
    [3, 2, 0, 2],
    [2, 1, 2, 0]
];

const graph4 = [
];
const expected4 = [
];


const result0 = allPairsShortestPaths(graph0);
const result1 = allPairsShortestPaths(graph1);
const result2 = allPairsShortestPaths(graph2);
const result3 = allPairsShortestPaths(graph3);
const result4 = allPairsShortestPaths(graph4);

const test0 = (JSON.stringify(result0) == JSON.stringify(expected0));
const test1 = (JSON.stringify(result1) == JSON.stringify(expected1));
const test2 = (JSON.stringify(result2) == JSON.stringify(expected2));
const test3 = (JSON.stringify(result3) == JSON.stringify(expected3));
const test4 = (JSON.stringify(result4) == JSON.stringify(expected4));

console.assert(test0, "test0 was false");
console.assert(test1, "test1 was false");
console.assert(test2, "test2 was false");
console.assert(test3, "test3 was false");
console.assert(test4, "test4 was false");

if (!test0 || !test1 || !test2 || !test3 || !test4) {
    throw "Testing Failed...";
}