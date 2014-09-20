console.log("started...");

var app = angular.module('app', []);

app.controller('ThisController', function($scope) {
	$scope.this = 'this1';
});

console.log("jquery loaded");