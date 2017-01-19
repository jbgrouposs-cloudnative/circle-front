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
		Restangular.all("articles").getList().then(function(articles) {
			console.log("get articles");
			console.log(articles);

			$scope.articles = articles;
		});
	}
]);