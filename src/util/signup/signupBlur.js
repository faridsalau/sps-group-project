export const handleFirstNameBlur = errors => {
  if (isEmpty(firstName) || !isValidName(firstName)) {
    errors.firstName = signupErrors.firstName;
  } else {
    delete errors.firstName;
  }
};
