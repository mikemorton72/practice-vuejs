/* global Vue */
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Calculator App",
      number1: 0,
      number2: 0,
      number3: 0,
      result: 0
    };
  },
  methods: {
    formatedNumbers: function () {
      var numbers = [this.number1, this.number2, this.number3];
      numbers = numbers.map(number => parseInt(number));
      return numbers;
    },
    addNumbers: function () {
      this.result = this.formatedNumbers().reduce((sum, number) => sum + number);
    },
    productNumbers: function () {
      this.result = this.formatedNumbers().reduce((product, number) => product * number);
    },
  }
});
