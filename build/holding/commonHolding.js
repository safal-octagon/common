"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectRandomFromArray = exports.weighted_random = void 0;
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
