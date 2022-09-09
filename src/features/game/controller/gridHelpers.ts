import { scoreIncrease } from './move';

export const blankGrid = (size: number) => {
  const grid = Array.from(new Array(size), () =>
    Array.from(new Array(size), () => 0),
  );
  return grid;
};

export const slideRow = (row: number[]) => {
  let arr = row.filter((val) => val);
  const missing = row.length - arr.length;
  const zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
};

export const combineRow = (row: number[]) => {
  for (let i = row.length - 1; i >= 1; i--) {
    const a = row[i];
    const b = row[i - 1];
    if (a === b && (a !== 0 || b !== 0)) {
      row[i] = a + b;
      scoreIncrease(row[i]);
      row[i - 1] = 0;
    }
  }
  return row;
};

export const rotateGrid = (grid: number[][]) => {
  const size = grid[0].length;
  const newGrid = blankGrid(size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
};

export const flipGrid = (grid: number[][]) => {
  const size = grid[0].length;
  for (let i = 0; i < size; i++) {
    grid[i].reverse();
  }
  return grid;
};

export const compareGrid = (oldGrid: number[][], newGrid: number[][]) => {
  const size = oldGrid[0].length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (oldGrid[i][j] !== newGrid[i][j]) {
        return true;
      }
    }
  }
  return false;
};

export const operate = (row: number[]) => {
  row = slideRow(row);
  row = combineRow(row);
  row = slideRow(row);
  return row;
};
