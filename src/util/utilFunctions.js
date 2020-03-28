export const trimObjValues = obj => {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = typeof obj[curr] === "string" ? obj[curr].trim() : obj[curr];
    return acc;
  }, {});
};

export const isEmpty = item => {
  if (typeof item === "object") {
    return Object.keys(item).length === 0;
  }
  if (typeof item === "string") {
    if (item.trim() === "") return true;
    else return false;
  }
};
