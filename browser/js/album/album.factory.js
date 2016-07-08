'use strict';

juke.factory('AlbumFactory', function($http){
	var singleAlbum = {};
	singleAlbum.fetchById = function (albumId){
		return $http.get('/api/albums/' + albumId)
  		.then(function (res) { 
  			return res.data; })
		.then(function (album) {
	    	album.imageUrl = '/api/albums/' + album.id + '/image';
    		album.songs.forEach(function (song, i) {
      			song.audioUrl = '/api/songs/' + song.id + '/audio';
      		song.albumIndex = i;
    		});
    		return album
		})
	}

	return singleAlbum;
});

juke.factory('AlbumsFactory', function($http, AlbumFactory){
	var albums = {};
	albums.fetchAll = function(){
		return $http.get('/api/albums/')
		.then(function(res){
			return res.data;
		})
		.then(function(modifiedAlbums){
			var returnAlbums = [];
			for(var x=0; x<modifiedAlbums.length; x++){
				AlbumFactory.fetchById(modifiedAlbums[x].id)
				.then(function(foundAlbum){
					returnAlbums.push(foundAlbum);
				})
			}
			return returnAlbums
		})
	}

	return albums;
})