angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later

}).controller('raspisCtrl', function($scope,$http, $stateParams, $timeout) {
    //scope.test = $stateParams.dayID;
    var namesWeek = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","ВЫХОДНОЙ НАХ"];
    switch ($stateParams.dayID) {
      case "pn":  $scope.day = namesWeek[0]; break;
      case "vt":  $scope.day = namesWeek[1]; break;
      case "sr":  $scope.day = namesWeek[2]; break;
      case "cht":   $scope.day = namesWeek[3]; break;
      case "pyat":  $scope.day = namesWeek[4]; break;
      case "sub":   $scope.day = namesWeek[5]; break;
      default : break
    }
    var typeWeek;
    if(positiveWeek()){
      typeWeek = "Четная";
    }
    else{
      typeWeek = "Нечетная";
    }
    $scope.typeWeek = typeWeek;

    $http.get(url_raspisanie + localStorage.getItem("currentGroup") + ".json")
      .success(function(data) {
         var  raspisane;
        localStorage.setItem("raspisanie",data);
        if (positiveWeek()){
          raspisane = data.chet[0];
        }
        else{
          raspisane= data.necet[0];
        }
        $scope.raps = raspisane;
      }).error(function(data) {
        alert("Rasp not loaded " + data );
        if (positiveWeek()){
          $scope.raps = localStorage.getItem("raspisanie").chet;
        }
        else{
          $scope.raps = localStorage.getItem("raspisanie").necet;
        }

      });
    //$scope.$apply();
  })
  .controller('setCtrl', function($scope,$http ,$stateParams, $timeout) {
    //scope.test = $stateParams.dayID;
    $http.get(url_grups)
      .success(function(data) {

        var groups = [];
        console.log(data);
        localStorage.setItem("groups-json",data);
       // var _group = JSON.parse(data);
        for(var i = 0; i <= data.size - 1; i++)
        {
          groups.push( data.groups.split(',')[i]);
        }
        $scope.groups = groups;
      }).error(function(data) {
        alert("Groups not loaded " + data );

      });
  });






var groups = [];

///urls
//var url_grups = "http://dl.dropboxusercontent.com/u/61847240/raspisanie/avalible.json";
var url_grups = "https://raw.githubusercontent.com/Arkuda/Raspisanie/master/avalible.json";
var url_raspisanie = "https://raw.githubusercontent.com/Arkuda/Raspisanie/master/";



function positiveWeek(){
  var today = new Date();
  var weekno = today.getWeek();
  if((weekno % 2) == 0){
    //nechetnayua :C
    return false;
  }
  else{
    return true;
  }
}

Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
}
