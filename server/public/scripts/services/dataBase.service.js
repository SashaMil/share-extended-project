movieApp.service('dataBaseService', function($http) {
  let vm = this;

  vm.storeInService = function(title) {
    vm.sharedData = title;
  }

  vm.postMovieInfo = function(obj) {
    console.log(obj);
    return $http({
      method: 'POST',
      url: '/movie',
      data: obj
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
      url: '/movie',
    })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(`Error getting movieList from db ${error}`);
    })
  }

})
