'use strict'

juke.controller('PlaylistFormCtrl', function($scope,state){
	$scope.createPlaylist = function () {
		$scope.hasSubmitted = true;
		PlaylistFactory.create($scope.newPlaylist)
		.then(function(playlist){
			$state.go('playlist', { name: playlist.name })
		})
		.catch(function(err){
			$scope.hasSubmitted = false;
			$scope.serverError = err.message || "Something went wrong!";
		});
	};
})