'use strict'

juke.config(function($stateProvider){
	$stateProvider.state('albumList', {
		url: '/albums',
		controller: 'AlbumsCtrl',
		templateUrl: 'js/album/templates/albums.html'
	}),
	$stateProvider.state('singleAlbum', {
		url: '/album:id',
		controller: 'AlbumCtrl',
		templateUrl: 'js/album/templates/album.html'
	})
})