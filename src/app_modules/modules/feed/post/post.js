angular.module('FeedPostCtrl',[]).controller('FeedPostCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	'marked',
	'Restangular',
	function($stateParams, $rootScope, $scope, $state, marked, Restangular){
		$scope.feed = {
			feedTitle: '',
			feedTag: ''
		};
		$scope.editorValue = "";
		
		$scope.fullScreenPreview = function() {
			$rootScope.markdownEditorObjects.editorValue.showPreview();
			$rootScope.markdownEditorObjects.editorValue.setFullscreen(true);
		};

		$scope.onFullScreenCallback = function(e) {
			e.showPreview();
		};

		$scope.onFullScreenExitCallback = function(e) {
			e.hidePreview();
		};

		$scope.postArticle = function(feedData){
			Restangular.all("articles").post({
				Title: feedData.feedTitle,
				Body: $scope.editorValue
			});

			$state.go('feed-list', {}, {reload: true});
		};
	}
]);