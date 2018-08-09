require("dotenv").config();
var request = require("request");
var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var command = process.argv[2];
var search = process.argv[3];



if (command == 'movie-this') {
    movieThis(search);
} else if (command == 'spotify-this-song') {
    spotifyThisSong(search);
} else if (command == 'my-tweets') {
    myTweets ();
} else if (command == 'do-what-it-says'){
    doWhatItSays();
} 


function spotifyThisSong (song) {
    var song = search;
    var spotify = new Spotify(keys.spotify);

    
    spotify.search({ type: 'track', query: song }, function(err, data) {
        
        if (err) {
            return console.log('Error occurred: ' + err);
        }else {
            var songInfo = data.tracks.items[0];

            console.log("The Artist name is: " + songInfo.artists[0].name)
            console.log("The song name is: " + songInfo.name)
            console.log("The album name is: " + songInfo.album.name)
            console.log("Listen to the song here: " + songInfo.preview_url)

            var log = ('\n' + "SPOTIFY INFO: " + '\n' + 
                        "The Artist name is: " + songInfo.artists[0].name + '\n' +
                        "The song name is: " + songInfo.name + '\n' +
                        "The album name is: " + songInfo.album.name + '\n' +
                        "Listen to the song here: " + songInfo.preview_url + '\n' 
                    );

            fs.appendFile('log.txt', log, function(err) {
                if (err) throw err;
                console.log('The Spotify info was appended to the log file.');
              });
        };

    });
}

function movieThis(search) {
    
    request("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    if (!error && response.statusCode === 200) {

    console.log("The title of the movie is: " + JSON.parse(response.body).Title);
    console.log("Year the movie came out: " + JSON.parse(response.body).Year);
    console.log("The movie's rating is: " + JSON.parse(response.body).imdbRating);
    console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(response.body).Ratings[1].Value);
    console.log("Country where the movie was produced: " + JSON.parse(response.body).Country);
    console.log("Language of the movie: " + JSON.parse(response.body).Language);
    console.log("Actors in the movie: " + JSON.parse(response.body).Actors);

    var log = ( '\n' + "MOVIE INFO: " + '\n' + 
                "The title of the movie is: " + JSON.parse(response.body).Title + '\n' +
                "Year the movie came out: " + JSON.parse(response.body).Year + '\n' +
                "The movie's rating is: " + JSON.parse(response.body).imdbRating + '\n' +
                "Rotten Tomatoes Rating of the movie: " + JSON.parse(response.body).Ratings[1].Value + '\n' +
                "Country where the movie was produced: " + JSON.parse(response.body).Country + '\n' +
                "Language of the movie: " + JSON.parse(response.body).Language + '\n' +
                "Actors in the movie: " + JSON.parse(response.body).Actors + '\n' 
            );

            fs.appendFile('log.txt', log, function(err) {
                if (err) throw err;
                console.log('The MovieThis info was appended to the log file.');
              });
  }
});
}

function myTweets (){

var Twitter = require('twitter');
var twitter = new Twitter(keys.twitter);
 
var params = {screen_name: 'enea_ga'};
twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {

        console.log(' ');
        console.log("Tweet created: " + tweets[i].created_at);
        console.log("Tweet: " + tweets[i].text);

        var log = ( '\n' + "TWITTER INFO: " + '\n' + 
                    "Tweet created: " + tweets[i].created_at + '\n' +
                    "Tweet: " + tweets[i].text + '\n'  
                );

            fs.appendFile('log.txt', log, function(err) {
                if (err) throw err;
                console.log('The Twitter info was appended to the log file.');
              });
    }
  }
});
}

function doWhatItSays() {

    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);

        var log = ( '\n' + "doWhatItSays INFO: " + '\n' + 
                    "Do what it says data: " + data + '\n' 
                );

            fs.appendFile('log.txt', log, function(err) {
                if (err) throw err;
                console.log('The doWhatItSays info was appended to the log file.');
              });
    });
}

