import { goto } from "@sapper/app";
import { isEmpty } from "../util/validators.js";
import { isLoading } from "../stores/uiStore.js";

export const signUp = (auth, errors, newUserData) => {
  const alreadyFoundError = new Error("userWithEmailAlreadyExists");
  const newUser = {
    firstName: newUserData.firstName.trim(),
    lastName: newUserData.lastName.trim(),
    email: newUserData.email.trim(),
    password: newUserData.password.trim()
  };
  if (isEmpty(errors)) {
    isLoading.set(true);
  }
};
