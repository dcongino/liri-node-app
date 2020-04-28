require("dotenv").config();
var nodeArgs = process.argv;

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var songName = "";

for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];
    } else {
      songName += nodeArgs[i];
    }
  }

 
spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(JSON.stringify(data.tracks.items[0].artists[0].name));
console.log(JSON.stringify(data.tracks.items[0].name)); 
console.log(JSON.stringify(data.tracks.items[0].preview_url)); 
console.log(JSON.stringify(data.tracks.items[0].album.name));  

});