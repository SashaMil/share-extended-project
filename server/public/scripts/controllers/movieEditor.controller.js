movieApp.controller('movieEditorController', function(dataBaseService, $mdDialog, $location, $timeout) {
  let vm = this;

  vm.getMovieData = function() {
    vm.movieInfo = dataBaseService.sharedData
  }

  vm.removeMovie = function(id) {
    dataBaseService.deleteMovie(id)
    .then(function() {
      vm.getMovieData();
    })
  }

  vm.refreshPage = function() {
    vm.movieInfo = dataBaseService.getMovieInfo()
    .then(function(response) {
      $timeout(function() {
      }, 200, false);
      vm.movieInfo = response.data;
    })
  }

  vm.editMovie = function(obj) {
    console.log(obj);
    dataBaseService.putMovie(obj)
    .then(function() {
      vm.changeView = function(view) {
        $location.path('localhost:5000/#!/display');
      }
    })
  }

  vm.getMovieData();


});
