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

export const timeSince = date => {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
