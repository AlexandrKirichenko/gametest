import React, { FC } from 'react';
import styled from 'styled-components';

import { Cell } from '../Cell';

interface BackgroundGrid {
  size: number;
}

export const BackgroundGrid: FC<BackgroundGrid> = ({ size }) => {
  return (
    <Grid size={size}>
      {Array.from(new Array(size * size), (_, i) => i).map((i) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Cell key={i} />
      ))}
    </Grid>
  );
};

interface GameProps {
  cells: number[][];
  size: number;
}

export const Game: FC<GameProps> = ({ cells, size }) => {
  return (
    <Wrapper>
      <BackgroundGrid size={size} />
      <Playground size={size}>
        {cells.map((row, y) =>
          row.map((value, x) => {
            if (value === 0) {
              return null;
            }
            return (
              <Cell
                key={`key_${x}_${y}`}
                x={x + 1}
                y={y + 1}
                value={value}
                color={''}
              >
                {value}
              </Cell>
            );
          }),
        )}
      </Playground>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor};
  height: 380px;
  width: 380px;
  padding: 10px;
`;

const Grid = styled.div<{ size?: number }>`
  height: 380px;
  width: 380px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-template-rows: repeat(${({ size }) => size}, 1fr);
  position: absolute;
`;

const Playground = styled(Grid)`
  background-color: transparent;
`;

export default Game;
