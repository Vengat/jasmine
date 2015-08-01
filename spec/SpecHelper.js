beforeEach(function () {
  jasmine.addMatchers({
    toBeAGoodInvestment: function () {
      return {
        compare: function (actual, expected) {
          var investment = actual;
          console.log("In the matcher");
          console.log(actual);
          console.log(expected);
          // this.message = function() {
          //   return 'Expected investment to be a good investment';
          // };
          return {
            pass: investment.isGood()
          }
        }
      };
    }
  });
});

// beforeEach(function () {
//   jasmine.addMatchers({
//     toBeAGoodInvestment: function () {
//         var investment = this.actual;
//         return investment.isGood();
//     }
//   });
// });