console.log('this is loaded');

//Spotify Node Package
const Spotify = require('node-spotify-api')

exports.spotify = {
  id:process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
}






