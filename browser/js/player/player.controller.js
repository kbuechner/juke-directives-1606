'use strict';

juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

  // main toggle
  $scope.toggle = function (song) {
    if (PlayerFactory.isPlaying()) 
      $rootScope.$broadcast('pause');
    else 
      $rootScope.$broadcast('play', song);
  };

  // incoming events (from Album or toggle)
  $scope.$on('pause', pause);
  $scope.$on('play', play);

  // functionality
  function pause () {
    PlayerFactory.pause();
  }

  function play (event, song){
    // stop existing audio (e.g. other song) in any case
    if (song === PlayerFactory.getCurrentSong())
      PlayerFactory.resume();
    else
     PlayerFactory.start(song);
  }

  // outgoing events (to Album… or potentially other characters)
  // $scope.next = function () { pause(); $rootScope.$broadcast('next'); };
  // $scope.prev = function () { pause(); $rootScope.$broadcast('prev'); };

  function seek (decimal) {
    audio.currentTime = audio.duration * decimal;
  }

  $scope.handleProgressClick = function (evt) {
    seek(evt.offsetX / evt.currentTarget.scrollWidth);
  };

});
