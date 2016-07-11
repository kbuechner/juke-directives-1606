'use strict'

juke.config(function($stateProvider){
	$stateProvider.state('artistList', {
		url: '/artists',
		controller: 'ArtistsCtrl',
		templateUrl: 'js/artist/templates/artists.html'
	});
})