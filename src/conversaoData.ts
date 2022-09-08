export const conversaoData = (data: string) => {
  let novaData = data.split('/');
  return `${novaData[2]}-${novaData[1]}-${novaData[0]}`;
};
