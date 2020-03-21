import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isEmpty
} from "./validators.js";
import signupErrors from "./homePageErrors.js";

export const handleFirstNameBlur = (firstName, errors) => {
  if (isEmpty(firstName) || !isValidName(firstName)) {
    errors.firstName = signupErrors.firstName;
  } else {
    delete errors.firstName;
  }
};

export const handleLastNameBlur = (lastName, errors) => {
  if (isEmpty(lastName) || !isValidName(lastName)) {
    errors.lastName = signupErrors.lastName;
  } else {
    delete errors.lastName;
  }
};

export const handleEmailBlur = (email, errors) => {
  if (isEmpty(email) || !isValidEmail(email)) {
    errors.email = signupErrors.email;
  } else {
    delete errors.email;
  }
};

export const handlePasswordBlur = (password, errors) => {
  if (isEmpty(password) || !isValidPassword(password)) {
    errors.password = signupErrors.password;
  } else {
    delete errors.password;
  }
};
