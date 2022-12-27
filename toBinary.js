function toBinary(n) {
  const bynary = [];
  let num = n;

  while (n >= 1) {
    n = Math.floor(n / 2);
    bynary.push(0);
  }

  for (let i = bynary.length - 1; i >= 0; i--) {
    const digit = 2 ** i;

    if (num >= digit && digit) {
      bynary[bynary.length - i - 1] = 1;
      num = num - digit;
    }
  }

  return bynary;
}

console.log(toBinary(4));
