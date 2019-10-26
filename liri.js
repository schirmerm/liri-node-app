//To read and set any environment variables with the dotenv package
require("dotenv").config();
//fs Package to handle txt document
const fs = require('fs')
//Require Moment to adjust dates
const moment = require('moment')
//Axios used to get URLs
const axios = require('axios')
//Access key.js file
let keys = require("./keys.js");
//Grab Spotify Key
const Spotify = require('node-spotify-api')
let spotify = new Spotify(keys.spotify);
// Switch statement to create the commands
let command = process.argv[2]
let input = process.argv.slice(3).join(' ')
const commands = _ => {


switch(command) {

  case `concert-this`:
      axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`)
      .then(({data}) => {
        for( let i = 0; i < 10; i++){
          //Artist Lineup for the concert
        console.log(`Artist Lineup: ${data[i].lineup}`)
        //Venue Location (City, Country)
        console.log('Venue Location: ' + data[i].venue.city +', ' + data[0].venue.country)
        //Name of Venue
        console.log('Venue: ' + data[i].venue.name)
        //Date of Concert
        console.log('Date: ' + moment(data[i].datetime).format('LLLL'))
        }
      })
      .catch(e => console.log(e))
    break;
  
  case `spotify-this-song`:
    if(input === ''){input = 'Beat it'}
      spotify
      .search({ type: 'track', query: `${input}`, limit: 1 })
      .then(({tracks}) => {
          //Artists
        console.log(tracks.items[0].artists[0].name);
          //Name of the song
        console.log(tracks.items[0].name)
        // Preview Url
        console.log(tracks.items[0].preview_url)
        // Album Name
        console.log(tracks.items[0].album.name)
        
      })
      .catch(function(err) {
        console.log(err);
      });
    break;

  case `movie-this`: 
  if(input === ''){input = 'The Dark Knight'}
  axios.get(`http://www.omdbapi.com/?t=${input}&apikey=trilogy`)
  .then(({data}) => {
    //Movie Title
    console.log('Movie Title: ' + data.Title)
    //Year it was released
    console.log('Year of Release: ' + data.Year)
    //IMDB Rating
    console.log(`IMDB Rating: ${data.Ratings[0].Value}`)
    //Rotten Tomatoes rating
    console.log(`Rotten Tomatoes Rating: ${data.Ratings[1].Value}`)
    //Country it was produced in
    console.log('Country where it was produced: ' + data.Country)
    //Language of the movie
    console.log('Language of the Movie: ' + data.Language)
    //Movie plot
    console.log('Movie Plot: ' + data.Plot)
    //Actors in the movie
    console.log('Actors: ' + data.Actors)
  })
  .catch(e => console.log(e))
    break;

  case `do-what-it-says`:
    fs.readFile('random.txt','UTF8', (err, data) => {
      if (err){console.log(err)}
      command = data.split(',')[0]
      input = data.split(',')[1]
      commands()
    })
  }
}
commands()
