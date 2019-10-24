console.log('this is loaded');

//Spotify Node Package
const Spotify = require('node-spotify-api')

const spotify = new Spotify ({
  id:'e24c9bf78167492eaee3843fe4174bd9',
  secret: 'df57dded0909408a8384bf81c03ecb2e'
})
spotify
  .search({ type: 'track', query: `beat it`, limit: 3 })
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


// const moment = require('moment')


// module.exports
