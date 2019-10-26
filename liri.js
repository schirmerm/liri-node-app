const fs = require('fs')
const moment = require('moment')
require("dotenv").config();
const axios = require('axios')
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
// const db = require('db')


const now = moment()
//Spotify
// const spotify = new Spotify(keys.spotify)

//Bands in Town







// Switch statement to create the commands
let command = process.argv[2]
let input = process.argv.slice(3).join(' ')

switch(command) {
  case `concert-this`:
      axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
      .then(({data}) => {
        for( let i = 0; i < 20; i++){
        console.log('Venue Location: ' + data[i].venue.city +', ' + data[0].venue.country)
        console.log('Venue: ' + data[i].venue.name)
        console.log('Date: ' + moment(data[i].datetime).format('LLLL'))
        }
      })
      .catch(e => console.log(e))
    break;
  
  case `spotify-this-song`:
      spotify
      .search({ type: 'track', query: `${input}`, limit: 3 })
      .then(({tracks}) => {
        for (let i = 0; i < 3; i++) {
          //Artists
        console.log(tracks.items[i].artists[0].name);
          //Name of the song
        console.log(tracks.items[i].name)
        // Preview Url
        console.log(tracks.items[i].preview_url)
        // Album Name
        console.log(tracks.items[i].album.name)
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    break;

  case `movie-this`: 
  axios.get(`http://www.omdbapi.com/?t=${input}&apikey=trilogy`)
  .then(({data}) => {
    console.log('Movie Title: ' + data.Title)
    console.log('Year of Release: ' + data.Year)
    console.log(`IMDB Rating: ${data.Ratings[0].Value}`)
    console.log(`Rotten Tomatoes Rating: ${data.Ratings[1]}`)
    console.log('Country where it was produced: ' + data.Country)
    console.log('Language of the Movie: ' + data.Language)
    console.log('Plot: ' + data.Plot)
    console.log('Actors: ' + data.Actors)
  })
  .catch(e => console.log(e))
    break;

  case `do-what-it-says`:
    break;

}
