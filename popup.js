chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
  var movieName = selection[0];
  var res = movieName.split(" ");
  var conCat = res.join('+');
  //console.log(movieName);
  //document.getElementById("output").innerHTML = conCat; //check movie name;
  var xhttp = new XMLHttpRequest();
  apiQuery = "http://www.omdbapi.com/?t=" + conCat + "&y=&plot=short&r=json";
  //document.getElementById("output").innerHTML = apiQuery; //create api query
  xhttp.open("GET", apiQuery, false);
  xhttp.send();
  var result = JSON.parse(xhttp.responseText);
  console.log(result);
  document.getElementById("titleRating").innerHTML = result.imdbRating; // imdbRating
  document.getElementById("movieTitle").innerHTML = result.Title; // imdbTitle
  document.getElementById("moviePoster").src = result.Poster; //imdbPoster
  document.getElementById("numberVotes").innerHTML = result.imdbVotes; //imdbVotes
  document.getElementById("releaseDate").innerHTML = result.Released; //imdbVotes
  document.getElementById("genre").innerHTML = result.Genre; //imdbVotes

});
