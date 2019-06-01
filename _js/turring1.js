// const res = (a, b) => a + b;

const res = a => b => a + b;

console.log(res(1)(2));

const res1 = a => b => c => a + b + c;

console.log(res1(1)(2)(3));