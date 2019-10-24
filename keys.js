console.log('this is loaded');

//Spotify Node Package
const Spotify = require('node-spotify-api')

const spotify = new Spotify ({
  id:'e24c9bf78167492eaee3843fe4174bd9',
  secret: 'df57dded0909408a8384bf81c03ecb2e'
})
spotify
  .search({ type: 'artist', query: 'Michael Jackson', limit: 1 })
  .then(function(response) {
    console.log(response.artists.items);
  })
  .catch(function(err) {
    console.log(err);
  });


// const moment = require('moment')


// module.exports
