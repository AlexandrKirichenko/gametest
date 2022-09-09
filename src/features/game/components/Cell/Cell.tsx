import React, { FC } from 'react';
import styled from 'styled-components';

import { fontSizeCalculater } from '../../helpers';

interface CellProps {
  x: number;
  y: number;
  value: number;
  color: string;
  key: string | number;
}

export const Cell: FC<CellProps> = ({
  x,
  y,
  value,
  color = 'secondaryColor',
}) => {
  let cellStyle = {};
  if (x && y) {
    cellStyle = {
      gridColumn: `${x}/${x + 1}`,
      gridRow: `${y}/${y + 1}`,
      fontSize: fontSizeCalculater(value),
    };
  }

  const backgroundColor = value ? `cellColor_${value}` : color;

  return (
    <Box
      x={x}
      y={y}
      value={value}
      style={cellStyle}
      backgroundColor={backgroundColor}
    >
      {value}
    </Box>
  );
};

const Box = styled.div<{
  x: number;
  y: number;
  value: number;
  backgroundColor: string;
}>`
  background-color: ${({ theme, backgroundColor }: any) =>
    theme[backgroundColor] || theme.cellColor};
  color: ${({ theme, value }: any) =>
    value < 8 ? theme.cellLabel : theme.white};
  border-radius: 5px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  font-weight: 500;
  animation: show 100ms ease-in-out;
  transition: 100ms ease-in-out;
`;
