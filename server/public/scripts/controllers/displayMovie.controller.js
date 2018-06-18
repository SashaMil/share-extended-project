movieApp.controller('displayMovieController', function(dataBaseService) {
  let vm = this;
  vm.currentNavItem = 'display';

  vm.displayMovie = function() {
    dataBaseService.getMovieInfo()
    .then(function(response) {
      vm.movieList = response.data;
      console.log(vm.movieList);
    })
  }
  vm.displayMovie();
})
