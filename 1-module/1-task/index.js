function factorial(n) {
  let resultFactorial;
  if ((n == 0)||(n == 1)) {
    return 1;
  }
  else
    resultFactorial = n;
  while (n > 1) {
    resultFactorial *= (--n);
  }
  return resultFactorial;
}

