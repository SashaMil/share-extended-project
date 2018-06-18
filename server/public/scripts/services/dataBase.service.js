movieApp.service('dataBaseService', function($http) {
  let vm = this;

  vm.storeInService = function(title) {
    vm.sharedData = title;
  }

  vm.postMovieInfo = function(obj) {
    vm.objectToSend = {
      actors: obj.Actors,
      awards: obj.Awards,
      boxoffice: obj.BoxOffice,
      country: obj.Country,
      dvd: obj.DVD,
      director: obj.Director,
      genre: obj.Genre,
      imdbrating: obj.imdbRating,
      imdbvotes: obj.imdbVotes,
      internetmoviedatabase: obj.Ratings[0].Value,
      metacritic: obj.Ratings[2].Value ? obj.Ratings[2].Value : undefined,
      metascore: obj.Metascore,
      plot: obj.Plot,
      poster: obj.Poster,
      production: obj.Production,
      rated: obj.Rated,
      released: obj.Released,
      rottentomatoes: obj.Ratings[1].Value,
      runtime: obj.Runtime,
      title: obj.Title,
      type: obj.Type,
      website: obj.Website,
      writer: obj.Writer
    }
    console.log(vm.objectToSend);
    return $http({
      method: 'POST',
      url: '/movie',
      data: vm.objectToSend
    })
    .then(function(response) {
      console.log('Successfully posted to /movie');
    })
    .catch(function(error) {
      console.log(`Error posting movieInfo to ${error}`)
    })
  }

  vm.getMovieInfo = function() {
    return $http({
      method: 'GET',
      url: '/movie'
    })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(`Error getting movieList from db ${error}`);
    })
  }

  vm.putMovie = function(obj) {
    console.log(obj);
    return $http({
      method: 'PUT',
      url: '/movie',
      params: obj
    })
    .then(function(response) {
      console.log('edited movie', response);
    })
    .catch(function(error) {
      console.log(`Error editing movie`, error);
    })
  }

  vm.deleteMovie = function(param) {
    return $http({
      method: 'DELETE',
      url: `/movie/${param}`
    })
    .then(function(response) {
      console.log(`Deleted movie ${response}`);
    })
    .catch(function(error) {
      console.log(`Error deleting movie ${error}`);
    })
  }

})
