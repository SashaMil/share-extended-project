movieApp.service('dataBaseService', function($http) {
  let vm = this;

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

})
