function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(3, 4, 5));
console.log(isTriangle(3, 4, 7));
