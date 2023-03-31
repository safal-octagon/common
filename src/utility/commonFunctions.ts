export const weighted_random = (items: any[], weights: number[]) => {
  let i;
  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;
  let random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return items[i];
};
export const selectRandomFromArray = <T>(array: T[]) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
export const randomBetweenTwoNumbers = (min: number, max: number) => {
  // min and max included

  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getNumberOfRandomFromList = (
  list: number[],
  numberOfItems: number
) => {
  let result = new Array(numberOfItems),
    len = list.length,
    taken = new Array(len);
  if (numberOfItems > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (numberOfItems--) {
    let x = Math.floor(Math.random() * len);
    result[numberOfItems] = list[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};
export function transposeMatrix(matrix: number[][]) {
  var transposedMatrix: number[][] = [];

  for (var i = 0; i < matrix[0].length; i++) {
    transposedMatrix[i] = [];
    for (var j = 0; j < matrix.length; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
}
