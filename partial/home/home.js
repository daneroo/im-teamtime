angular.module('teamtime').controller('HomeCtrl', function($scope, $interval) {
  "use strict";

  //  push this out to service.. maybe a tick broadcast?
  $scope.currentTime = new Date();
  var cancelTimer = $interval(function() {
    $scope.currentTime = new Date();
  }, 1000);

  $scope.$on('$destroy', function() {
    $interval.cancel(cancelTimer);
    console.log('Destroyed timer');
  });

  // https://github.com/urish/angular-moment
  $scope.users = [{
    name: 'Oleg',
    TZ: 'America/Toronto'
  }, {
    name: 'Keith',
    TZ: 'America/San_Francisco'
  }, {
    name: 'Daniel',
    TZ: 'America/Ottawa'
  }, {
    name: 'Alex',
    TZ: 'America/Ottawa'
  }];

});