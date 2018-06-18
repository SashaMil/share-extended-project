movieApp.controller('movieEditorController', function(dataBaseService, apiService, $mdDialog, $location, $timeout) {
  let vm = this;

  vm.getMovieData = function() {
    vm.movieInfo = dataBaseService.sharedData
  }

  vm.removeMovie = function(id, item) {
    dataBaseService.deleteMovie(id)
    .then(function() {
      vm.getMovieData();
      vm.refreshPage();
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

  vm.playTrailer = function(title) {
    console.log(title);
    apiService.youtubeSearchRequest(title)
    .then(function() {
      vm.video = apiService.youtubeSearchRequestResult.data.items;
    })

    // Renders youtube search result in DOM
    vm.playVideo = function(id) {
      return 'https://www.youtube.com/embed/' + id;
    }
  }

  vm.getMovieData();


});
