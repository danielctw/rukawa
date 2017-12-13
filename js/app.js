var myFitnessApp = angular.module('myFitnessApp',['ngRoute','rzModule','ngAnimate']);

myFitnessApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'FitController'
	})
	.when('/directory', {
		templateUrl: 'views/directory.html',
		controller: 'FitController'
		

	}).when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'FitnessController'
		
	}).when('/timeline', {
		templateUrl: 'views/timeline.html',
		controller: 'FitnessController'
		
		
	}).otherwise({
		redirectTo: '/dashboard'
		
	})
	
}]);

myFitnessApp.controller('FitnessController', ['$scope', '$http', function($scope, $http){

}]);

myFitnessApp.directive('randomNinja',[function(){
	return {
		restrict: 'EA',
		scope: {
			hope: '=',
			title: '=',
			fitness: '=',
			slider: '='
		}, 
		templateUrl: 'views/random.html',
		// template: '{{hope[0].level}}',
		controller: function($scope) {

			 // console.log($scope.slider);

			//console.log($scope.hope);
			//alert($scope.title);
			//alert($scope.hope);
			$scope.random = Math.floor(Math.random() * 3);
			//console.log($scope.random);
			//$scope.hope;
			// alert($scope.hope);  
		}

	};
}]);



myFitnessApp.controller('FitController', ['$scope', '$http', function($scope, $http){

	

	$scope.menu2 = [];

	$scope.onSliderChange = function (hello) {
		//console.log(value);    
		$scope.holla = $scope.slider.value;

		console.log($scope.slider.value);
        // console.log($scope.slider.legend);
    }

	$scope.slider = {
		value: 'Beginner',
		options: {
			showTicksValues: true,
			
			stepsArray: [
		      {value: 'Beginner', legend: 'Beginner'},
		      {value: 'Intermediate', legend: 'Intermediate'},
		      {value: 'Expert', legend: 'Expert'}
		      
		    ],
		    onChange: $scope.onSliderChange
		}

	};

	$scope.test = function(text) {
	  $scope.category = text;
	}

	$http.get('mock/menu.json').then(function(response) {
		$scope.menu2 = response.data;
		//console.log($scope.menu2);
		$scope.haru = $scope.menu2[0];

		//alert($scope.menu2);
	});



	$http.get('mock/fitness.json').then(function(response){
		//console.log(data.data);
		$scope.hope = response.data;
		//alert($scope.abu);
		//console.log($scope.hope);

	});

		//console.log($scope.menu2);

}]);
