angular.module('teamtime').controller('HomeCtrl', function($scope, $interval, moment, amMoment, $log, $http) {
  "use strict";

  // Language support (per user in app.js)
  // <script src="components/moment/lang/de.js"></script>
  // myapp.run(function(amMoment) {
  //   amMoment.changeLanguage('de');
  // });

  // module.exports.tz.add(require('./moment-timezone.json'));
  var tzLoaded = false;
  $http.get('/bower_components/moment-timezone/moment-timezone.json').then(function(response) {
    console.log(response.data);
    moment.tz.add(response.data);
    tzLoaded = true;
  });

  function fmt(value, TZ) {
    value = amMoment.preprocessDate(value, null);
    var date = moment(value);
    if (!date.isValid()) {
      return '';
    }
    // return amMoment.applyTimezone(date).format(format);
    if (date.tz && tzLoaded && TZ) {
      date = date.tz(TZ);
    } else {
      if (!date.tz) {
        $log.warn('angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?');
      }
    }
    return date.format($scope.timeFormat);
  }
  $scope.fmt = fmt;

  // $scope.timeFormat='dddd, MMMM Do YYYY, h:mm:ss a';
  // $scope.timeFormat='dddd, MMMM Do YYYY, HH:mm:ss';
  // $scope.timeFormat = 'llll';
  $scope.fullTimeFormat='dddd, MMMM Do, HH:mm:ss';
  $scope.timeFormat='ddd, MMM Do, HH:mm';

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
    TZ: 'Europe/Kiev'
  }, {
    name: 'Andrei',
    TZ: 'Europe/Minsk'
  }, {
    name: 'Tom',
    TZ: 'Europe/Zagreb'
  }, {
    name: 'Daniel',
    TZ: 'America/Montreal'
  }, {
    name: 'Alex',
    TZ: 'America/Montreal'
  }, {
    name: 'Ray',
    TZ: 'America/Los_Angeles'
  }, {
    name: 'Keith',
    TZ: 'America/Los_Angeles'
  }];

});