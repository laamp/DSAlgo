let count = 0;

function infiniteLoop() {
  if (count === 1000) return;
  console.log(`Loop #${count}`);
  count++;
  infiniteLoop();
}

function factorial(n) {
  if (n < 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
