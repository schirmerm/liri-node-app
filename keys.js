console.log('this is loaded');

//Spotify Node Package
const Spotify = require('node-spotify-api')
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

const axios = require('axios')
const db = require('db')
const moment = require('moment')


module.exports
