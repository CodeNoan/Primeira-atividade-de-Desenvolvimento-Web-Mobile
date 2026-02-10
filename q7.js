function ehPrimo(primo) {
  if (primo <= 1) return false;

  for (let i = 2; i < primo; i++) {
    if (primo % i == 0) return false;
  }

  return true;
}

if (ehPrimo(1))
  console.log("O numero eh primo");
else
  console.log("O numero nao eh primo");
