import { newCell } from './newCell';
import { blankGrid } from './gridHelpers';
import { setScore } from './move';

export const gameInit = (size: number) => {
  let grid = blankGrid(size);
  setScore(0);
  grid = newCell(grid);
  grid = newCell(grid);
  return grid;
};
