"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transposeMatrix = exports.getNumberOfRandomFromList = exports.randomBetweenTwoNumbers = exports.selectRandomFromArray = exports.weighted_random = void 0;
var weighted_random = function (items, weights) {
    var i;
    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    var random = Math.random() * weights[weights.length - 1];
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    return items[i];
};
exports.weighted_random = weighted_random;
var selectRandomFromArray = function (array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
};
exports.selectRandomFromArray = selectRandomFromArray;
var randomBetweenTwoNumbers = function (min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomBetweenTwoNumbers = randomBetweenTwoNumbers;
var getNumberOfRandomFromList = function (list, numberOfItems) {
    var result = new Array(numberOfItems), len = list.length, taken = new Array(len);
    if (numberOfItems > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (numberOfItems--) {
        var x = Math.floor(Math.random() * len);
        result[numberOfItems] = list[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
};
exports.getNumberOfRandomFromList = getNumberOfRandomFromList;
function transposeMatrix(matrix) {
    var transposedMatrix = [];
    for (var i = 0; i < matrix[0].length; i++) {
        transposedMatrix[i] = [];
        for (var j = 0; j < matrix.length; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }
    return transposedMatrix;
}
exports.transposeMatrix = transposeMatrix;
