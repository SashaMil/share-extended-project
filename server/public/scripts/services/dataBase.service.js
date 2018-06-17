movieApp.service('dataBaseService', function($http) {
  let vm = this;

  vm.postMovieInfo = function(obj) {
    return $http({
      method: 'POST',
      url: '/movieDB',
      data: obj
    })
    .then(function(response) {
      console.log('Successfully posted to movieDB');
    })
    .catch(function(error) {
      console.log(`Error posting movieInfo to ${error}`)
    })
  }

})
