var app = angular.module('interestApp',[]);
app.controller('interestCalculator', function(){
  var vm = this;
  vm.principal = 0;
  vm.rate = 0;
  vm.time = 0;
  var grandTotal = 0;
  // Initialize the Interest calculation
  vm.total = function(){
    return vm.principal * (1 + (vm.rate / 100) * vm.time);
  }
  // Calculate the interest only
  vm.interest = function(){
    return grandTotal - vm.principal;
  };
});