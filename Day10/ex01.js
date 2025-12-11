//Bài 1
function tinhPhuongTrinhbacnhat(A, B, x) {
  return A * x + B;
}
console.log(tinhPhuongTrinhbacnhat(3, 4, 5));

//Bài 2
function chuVi(width, length) {
  return (width + length) * 2;
}
console.log(chuVi(10, 15));

//Bài 3
function dientichHinhTron(r) {
  const dientich = Math.PI * r * r;
  return dientich.toFixed(2);
}
console.log(dientichHinhTron(5));

//Bài 4
function checkNumber(n) {
  if (n > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber(-1));
console.log(checkNumber(17));

//Bài 5
function SumNumber(...rest) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    if ((sum += rest[i]));
  }
  return sum;
}
console.log(SumNumber(1, 2, 3, 4, 5, "Bao", null, undefined));
console.log(SumNumber(1, 2, 3, 4, 5));

//Bài 6
function SumNumber2(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(SumNumber2(5, 10));
console.log(SumNumber2(10, 20));
console.log(SumNumber2(20, 30));

//Bài 7
function isPalindromeLoop(str) {
  const string = str.length;
  for (let i = 0; i < string / 2; i++) {
    if (str[i] !== str[string - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindromeLoop("madam"));
console.log(isPalindromeLoop("Upset"));

//Bài 8
function checkNumber2(...rest) {
  for (let i = 0; i < rest.length; i++) {
    if (i % 2 === 0) return true;
  }
}
console.log(checkNumber2(3, 1, 5, 7, 19));
