juke.factory('PlaylistFactory', function($http){

	var PlaylistFactory = {};
	var cachedPlaylists = [];

	function getData (res){
		return res.data;
	}
	PlaylistFactory.create = function(data){
		return $http.post('/api/playlists', data)
		.then(getData)
		.then(function(newPlaylist){
			cachedPlaylists.push(newPlaylist);
			return newPlaylist;
		})
		.catch(function(err){
			console.error(err)
		})
	}
	PlaylistFactory.fetchAll = function(){
		return $http.get('/api/playlists')
		.then(getData)
		.then(function(serverPlaylists){
			angular.copy(serverPlaylists, cachedPlaylists)
			return cachedPlaylists;
		})
		.catch(function(err){
			console.error(err)
		})
	}

	return PlaylistFactory;
}) 