angular.module('FeedListCtrl',[]).controller('FeedListCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	'Restangular',
	function($stateParams, $rootScope, $scope, $state, Restangular){
		var self = this;
		$scope.currentState = $state;

		/**
		 * フィード一覧を取得します。
		 */
		Restangular.all("articles").getList().then(function(response) {
			console.log("get articles response");
			console.log(response);

			$scope.articles = response.data;
		});
	}
]);