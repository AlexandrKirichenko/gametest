interface Theme {
  [keys: string]: string;
}

export const light: Theme = {
  white: '#fff',
  background: '#faf8ef',
  primaryColor: '#bbad9f',
  secondaryColor: '#cdc1b3',
  labelColor: '#776e65',
  cellLabel: '#776e65',

  cellColor: '#eee4da',
  cellColor_2: '#eee4da',
  cellColor_4: '#eee1c9',
  cellColor_8: '#f3b27a',
  cellColor_16: '#f69664',
  cellColor_32: '#f77c5f',
  cellColor_64: '#f75f3b',
  cellColor_128: '#edd073',
  cellColor_256: '#edcc62',
  cellColor_512: '#edc950',
  cellColor_1024: '#edc53f',
  cellColor_2048: '#edc22e',
};

export const dark: Theme = {
  white: '#ccd2da',
  background: '#1b1c23',
  primaryColor: '#202f3f',
  secondaryColor: '#506680',
  labelColor: '#506680',
  cellLabel: '#ccd2da',

  cellColor: '#96abc3',
  cellColor_2: '#96abc3',
  cellColor_4: '#82aad0',
  cellColor_8: '#3f77b7',
  cellColor_16: '#225a8c',
  cellColor_32: '#7f63d3',
  cellColor_64: '#5843b4',
  cellColor_128: '#3e2686',
  cellColor_256: '#b752c4',
  cellColor_512: '#7f2386',
  cellColor_1024: '#66166c',
  cellColor_2048: '#9f005c',
};
