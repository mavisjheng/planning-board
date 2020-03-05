const genRandomString = () =>
  Math.random()
    .toString(36)
    .substring(7);

export { genRandomString };
