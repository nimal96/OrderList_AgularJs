var myNinjaApp =angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){



});

myNinjaApp.run(function(){


});

myNinjaApp.controller('NinjaController',function($scope){

  $scope.message="Hey y'all";
  $scope.ninjas =['pasan','shameen','kasun','supun'];

});
