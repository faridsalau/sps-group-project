import { goto } from "@sapper/app";
import { isEmpty } from "../util/validators.js";
import { trimObjValues } from "../util/utilFunctions.js";
import { isLoading } from "../stores/uiStore.js";

export const signUp = (auth, errors, newUserData) => {
  const alreadyFoundError = new Error("userWithEmailAlreadyExists");
  const newUser = trimObjValues(newUserData);
  if (isEmpty(errors)) {
    isLoading.set(true);
  }
};
