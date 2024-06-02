// F(n)=F(n−1)+F(n−2)

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
