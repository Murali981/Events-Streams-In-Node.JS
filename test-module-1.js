// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }

// module.exports = Calculator; // We are exporting one single value which is the class "Calculator" here that's why we are using
// // module.exports syntax here

module.exports = class {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}; // Here we are assingning the class variable to the exports variable which will become a expression
