

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.set', {
      url: '/set',
      views: {
        'menuContent': {
          templateUrl: 'templates/set.html',
          controller: 'setCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })

  .state('app.raspisanie', {
    url: '/raspisanie/:dayID',
    views: {
      'menuContent': {
        templateUrl: 'templates/raspisanie.html',
        controller: 'raspisCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/raspisanie/'+ getDayOfWeek());
});






















var isAnglDate = false;
var DayOfWeek ="";


function getDayOfWeek(){
  var d = new Date();
  var n = d.getDay();
  if(isAnglDate){
    if(!(n ==6) || !(n ==0) ) return selectDayOfWeek(n-1);
    else return selectDayOfWeek(0);
  }else {
    if(!(n ==5) || !(n == 6) )  return selectDayOfWeek(n-1);
    else  return selectDayOfWeek( DayINT = 0);
  }
}

function selectDayOfWeek(dayint){
  switch (dayint) {
    case 0: return "pn"; break;
    case 1: return "vt"; break;
    case 2: return "sr"; break;
    case 3: return "cht"; break;
    case 4: return "pyat"; break;
    case 5: return "sub"; break;
  }
}
