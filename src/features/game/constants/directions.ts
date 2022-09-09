export const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

interface MapKeyCodeToDirection {
  [keys: string]: string;
}

export const mapKeyCodeToDirection: MapKeyCodeToDirection = {
  ArrowLeft: directions.LEFT,
  ArrowDown: directions.DOWN,
  ArrowRight: directions.RIGHT,
  ArrowUp: directions.UP,
};
