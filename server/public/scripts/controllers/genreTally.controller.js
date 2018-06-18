movieApp.controller('genreTallyController', function(dataBaseService) {
  let vm = this;
  vm.currentNavItem = 'genre';

  vm.getMovies = function() {
    console.log();
    dataBaseService.getMovieInfo()
    .then(function(response) {
      vm.movieList = response.data;
      console.log(vm.movieList);
    })
  }

  vm.getMovies();

  vm.getMoviesByGenre = function(genreQuery) {

    vm.genreQuery = genreQuery;
    // vm.result = vm.movieList.map(x => x.genre.split(",").map((y, index => y.filter(z => {
    //   if (genreQuery === z) {
    //     return index;
    //   }
    // })))
    vm.result = vm.movieList.map(x => x.genre.split(','))
    console.log(vm.result);

      // .map(y => y.filter((z, index) => {
      //   if (vm.genreQuery === z) {
      //     return index;
      //   }


    }

  console.log(vm.result);

})
