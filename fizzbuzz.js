function fizzBuzzForLoop () {
  for (var i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    }
    else if (i % 3 === 0) {
      return "Fizz";
    }
    else if (i % 5 === 0) {
      return "Buzz";
    }
    else {
      return i;
    }
  }
}

function fizzBuzzWhileLoop () {
  var i = 1;
  while (i <= 30) {
    i++;
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    }
    else if (i % 3 === 0) {
      return "Fizz";
    }
    else if (i % 5 === 0) {
      return "Buzz";
    }
    else {
      return i;
    }
  }
}
