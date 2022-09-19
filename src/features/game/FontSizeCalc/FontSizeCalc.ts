export const fontSizeCalculater = (value: number) => {
  const size = value < 100 ? 55 : value < 1000 ? 47 : value < 10000 ? 35 : 25;
  return size;
};
