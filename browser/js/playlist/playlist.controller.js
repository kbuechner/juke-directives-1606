'use strict'

juke.controller('PlaylistFormCtrl', function($scope, PlaylistFactory){
	
	$scope.submit = function(){
		if($scope.playlistForm.$invalid){
			return;
		}

		PlaylistFactory.create($scope.newPlaylist)
		.then(function(createdPlaylist){
			console.log(createdPlaylist)
			$scope.newPlaylist={};
			$scope.playlistForm.$setPristine();
			$scope.playlistForm.$setUntouched();
		})
	}
})

juke.controller('PlaylistsCtrl', function($scope, $log, PlaylistFactory){
	
	PlaylistFactory.fetchAll()
	.then(function(playlists){
		$scope.playlists = playlists;

	})
	.catch(function(err){
		console.error(err)
	})
})