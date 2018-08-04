require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

// this will be a switch statement or an if else 
// OMDB REQUEST ACTIVITY 17 HAS THIS SOLUTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! using the trilogy key!!
if (command == 'movie-this') {
    console.log(command);
    movieThis();
}
// 10. Make it so liri.js can take in one of the following commands:

//     * `my-tweets`

//     * `spotify-this-song`

//     * `movie-this`

//     * `do-what-it-says`

function myTweets () {
// show last 20 tweets
}

function spotifyThisSong () {
//     * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
   
//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
   
//    * Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
   
//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

//    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
}

function movieThis(movieName) {

    // Use the trilogy key here.

    // * This will output the following information to your terminal/bash window:

    // ```
    //   * Title of the movie.
    //   * Year the movie came out.
    //   * IMDB Rating of the movie.
    //   * Rotten Tomatoes Rating of the movie.
    //   * Country where the movie was produced.
    //   * Language of the movie.
    //   * Plot of the movie.
    //   * Actors in the movie.

}

function doWhatItSays() {

    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
    // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    
    // * Feel free to change the text in that document to test out the feature for other commands.
}