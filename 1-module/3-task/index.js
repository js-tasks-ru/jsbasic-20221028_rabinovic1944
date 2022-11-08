

function ucFirst(str) {
  if (str === "") {
     return (str);
  }

  if (str.length === 1) {
    str = str[0].toUpperCase();
    return (str);
  }

  str = str[0].toUpperCase() + str.slice(1, str.length);
  return (str);
}
