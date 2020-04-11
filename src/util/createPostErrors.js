const createPostErrors = {
  title:
    "Must be 1 - 100 characters long. Characters: " +
    "< > " +
    "' " +
    '" ' +
    "/ " +
    "; ` % are not allowed",
  body: "Must not be empty"
};

export default createPostErrors;
