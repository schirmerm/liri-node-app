const fs = require('fs')
require("dotenv").config();
const axios = require('axios')
// const db = require('db')
const keys = require("./keys.js");


//Spotify
// const spotify = new Spotify(keys.spotify)

//Bands in Town

// axios.get(`https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp&date=upcoming`)
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.log(e))

//OMDB API

axios.get(`http://www.omdbapi.com/?t=${input}&apikey=trilogy`)
  .then(({data}) => {
    console.log(data.Year)
  })
  .catch(e => console.log(e))

// Switch statement to create the commands
let command = process.argvb[2]
const input = process.argv[3]

// switch(command) {
//   case `concert-this`:
//     break;
  
//   case `spotify-this-song`:
//     break;

//   case `movie-this`:
//     break;

//   case `do-what-it-says`:
//     break;

// }
