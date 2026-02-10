let a = 0, b = 1;

while (a < 100) {
  console.log(a);
  let proximo = a + b;
  a = b;
  b = proximo;
}
