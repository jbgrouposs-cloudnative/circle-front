angular.module('FeedDetailCtrl',[]).controller('FeedDetailCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	'marked',
	'Restangular',
	function($stateParams, $rootScope, $scope, $state, marked, Restangular){
		var article_id = $scope.id;

		Restangular.one("articles", article_id).get().then(function(article){
			console.log("get articles/"+article_id);
			console.log(article);

			$scope.article = article;
		});

		Restangular.one("articles", article_id).all("comments").getList().then(function(comments){
			console.log("get articles/"+article_id+"/comments");
			console.log(comments);

			$scope.comments = comments;
		});

		// コメント投稿
		$scope.postComment = function(body){
			Restangular.one("articles", article_id).all("comments").post({
				Body: body
			});
		}

		/*
		$scope.itemData = $stateParams.itemData;
		$scope.markdownStr = "# ここから内容  \n## Markdown directive Test  \n---\n*It works!*\n#### Markdown [cheatsheet](//github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  \n\n*This* **is** [markdown](https://daringfireball.net/projects/markdown/)\\n and `{{ 1 + 2 }}` = {{ 1 + 2 }}  \n\n---  \n";
		
		$scope.commentList = [
			{userName: 'user1@jbcc', commentContents: '##### コメントしました'},
			{userName: 'user2@jbcc', commentContents: '##### コメントしました  \n and `{{ 1 + 2 }}` = {{ 1 + 2 }}'},
			{userName: 'user3@jbcc', commentContents: '##### コメントしました'}
		];
		*/
		
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

	}
]);