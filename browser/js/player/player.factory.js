'use strict';

juke.factory('PlayerFactory', function($rootScope){
	var player = {};
	var currentSong = null;
	var playing = false;
	var audio = document.createElement('audio');
	var progress = 0;
	var songs = [];
	var index = 0;

	audio.addEventListener("ended", function(){
		player.next();
	})
  
  	audio.addEventListener('timeupdate', function () {
    	progress = audio.currentTime / audio.duration;
	});

	player.start = function(song, songList){
		progress = 0;
		audio.pause();
		audio.src = song.audioUrl;
		audio.load();
		audio.play();
		
		playing = true;
		currentSong = song;

		if(songList){
			songs = songList;
		}
		else
			songs = [song];
		index = songs.indexOf(song)
		console.log(songs)
	}

	player.pause = function(){
		audio.pause();
		playing = false;
	}

	player.resume = function(){
		audio.play();
		playing = true;
	}

	player.isPlaying = function(){
		return playing;
	}

	player.getCurrentSong = function(){
		return currentSong;
	}

	player.next = function () {
		progress = 0;

		if(index===songs.length - 1){
			index = 0;
			player.start(songs[0], songs)
		}
		else
			player.start(songs[index+1], songs)
	}

	player.previous = function(){
		progress = 0;

		if(index===0){
			index = songs.length-1;
			player.start(songs[index], songs)
		}
		else
			player.start(songs[index-1], songs)
	}

	player.getProgress = function(){
		return progress;
	}

	return player;
  // non-UI logic in here
});