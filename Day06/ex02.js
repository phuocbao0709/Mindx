function isSameSign(a, b) {
  if (a > 0 && b > 0) {
    return true;
  } else if (a < 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}

isSameSign(10, 20);
isSameSign(-10, -20);
isSameSign(10, -20);
console.log(isSameSign(10, 20));
console.log(isSameSign(-10, -20));
console.log(isSameSign(10, -20));
