var thisApp = angular.module('waitStaff', []);

thisApp.controller('MyCtrl', function($scope) {

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        console.log('The form is valid');
        $scope.subtotal = $scope.meal_price + ($scope.meal_price * ($scope.tax_rate / 100));
        $scope.tip = $scope.subtotal * ($scope.tip_percentage / 100);
        $scope.total = $scope.subtotal + $scope.tip;
      } else {
        console.log('The form is invalid');
      }
    };

    $scope.cancel = function() {
      $scope.meal_price = '';
      $scope.tax_rate = '';
      $scope.tip_percentage = '';
    }

});
