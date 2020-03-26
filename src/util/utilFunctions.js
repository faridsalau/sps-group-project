export const trimObjValues = obj => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = typeof obj[curr] === "string" ? obj[curr].trim() : obj[curr];
    return acc;
  }, {});
};
