import { RandomChoice } from "../interfaces/randomChoice";

export const weighted_random = (
  items: any[],
  weights: number[]
): RandomChoice => {
  let i;
  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0;
  let random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break;
  return items[i];
};
export const selectRandomFromArray = (array: string[]) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};
