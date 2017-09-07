angular.module('itunes').service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.

 //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

   //Code here

   this.getSongData = function(artist) {
          return $http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK')
          .then(function(response){
             console.log(response);
          var songArr = [];


        var results = response.data.results;



        for (var i=0; i<results.length; i++){


           var obj = {
              Artist: results[i].artistName,
              Song: results[i].trackName,
              Collection: results[i].collectionName,
              AlbumArt: results[i].artworkUrl100,
              Type: results[i].kind,
              CollectionPrice: results[i].trackPrice,
              Play: results[i].previewUrl
            }

          songArr.push(obj);
         }

        return songArr;
       });
};
})
