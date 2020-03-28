import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidUserName
} from "./validators.js";
import { isEmpty } from "./utilFunctions.js";
import accountEntryErrors from "./accountEntryErrors.js";

export const handleFirstName = (firstName, errors) => {
  if (isEmpty(firstName) || !isValidName(firstName)) {
    errors.firstName = accountEntryErrors.firstName;
  } else {
    delete errors.firstName;
  }
};

export const handleLastName = (lastName, errors) => {
  if (isEmpty(lastName) || !isValidName(lastName)) {
    errors.lastName = accountEntryErrors.lastName;
  } else {
    delete errors.lastName;
  }
};

export const handleEmail = (email, errors) => {
  if (isEmpty(email) || !isValidEmail(email)) {
    errors.email = accountEntryErrors.email;
  } else {
    delete errors.email;
  }
};

export const handlePassword = (password, errors) => {
  if (isEmpty(password) || !isValidPassword(password)) {
    errors.password = accountEntryErrors.password;
  } else {
    delete errors.password;
  }
};

export const handleUserName = (username, errors) => {
  if (isEmpty(username) || !isValidUserName(username)) {
    errors.username = accountEntryErrors.username;
  } else {
    delete errors.username;
  }
};
