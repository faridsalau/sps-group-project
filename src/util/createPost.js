import { isValidTitle } from "./validators.js";
import { isEmpty } from "./utilFunctions.js";
import createPostErrors from "./createPostErrors.js";

export const handleTitle = (title, errors) => {
  if (isEmpty(title) || !isValidTitle(title)) {
    errors.title = createPostErrors.title;
  } else {
    delete errors.title;
  }
};

export const handleBody = (body, errors) => {
  if (isEmpty(body)) {
    errors.body = createPostErrors.body;
  } else {
    delete errors.body;
  }
};
