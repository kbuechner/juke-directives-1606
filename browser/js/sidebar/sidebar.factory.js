'use strict'

juke.factory = function('SidebarFactory', function($rootScope){
	var sidebar = {}
	sidebar.showAll = function(){
		$rootScope.$broadcast('showAllAlbums')
	}
})