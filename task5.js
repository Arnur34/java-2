let num = prompt('пиши');
num = +num;
let exponent = prompt('пиши');
exponent = +exponent;

function computePower(num, exponent) {
      var result = 1;
      for (i = 0; i < exponent; i++) {
      result *= num;
      }
      return result;
  }
computePower(num, exponent);
