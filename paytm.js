function challenge(input) {
  let divider = 0;
  let ones = 0;
  let zeros = 0;
  let score = 0;
  let temp = 0;
  let result = 0;

  while (divider !== input.length) {
    for (let i = 0; i < divider; i++) {
      if (input[i] === "1") ones++;
    }
    for (let j = divider; j < input.length; j++) {
      if (input[j] === "0") zeros++;
    }
    score = ones + zeros;
    if (score > temp) {
      temp = score;
      result = divider;
    }
    ones = 0;
    zeros = 0;
    divider++;
  }
  console.log(result);
}
challenge("110010100110");
