'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.alerts = [
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:20408,
				description:'total customers'
			},
			{
				icon:'glyphicon-calendar',
				color:'btn-success',
				total:8382,
				description:'upcoming events'
			},
			{
				icon:'glyphicon-edit',
				color:'btn-success',
				total:527,
				description:'new customers in 24 hrs'
			},
			{
				icon:'glyphicon-record',
				color:'btn-success',
				total:85000,
				description:'email sent'
			}
		];
	}
]);