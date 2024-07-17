export const setNumberWithinBounds = (
  num: number,
  minValue: number,
  maxValue: number
) => {
  if (num > maxValue) return maxValue;
  if (num < minValue) return minValue;
  return num;
};

export const numberToInt = (num: number) => {
  return Math.floor(num);
};
