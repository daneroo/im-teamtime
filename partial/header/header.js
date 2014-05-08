angular.module('teamtime').controller('HeaderCtrl',function($scope,$rootScope){
  $scope.isHome = true;
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams) {
      // console.log('header', toState);
      $scope.isHome = 'home'===toState.name;
    });
});