export const isEmpty = item => {
  if (typeof item === "object") {
    return Object.keys(item).length === 0;
  }
  if (typeof item === "string") {
    if (item.trim() === "") return true;
    else return false;
  }
};

export const isValidEmail = email => {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(emailRegEx);
};

export const isValidName = name => {
  const nameRegEx = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return name.match(nameRegEx);
};

export const isValidPassword = password => {
  const passwordRegEx = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,32}$/;
  return password.match(passwordRegEx);
};
