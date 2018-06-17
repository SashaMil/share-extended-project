movieApp.controller('homeController', function(apiService, dataBaseService, $q, $timeout) {
  let vm = this;
  vm.currentNavItem = 'home';

  // vm.timeGetMovieData = setTimeout(function(searchText) {
  //   console.log('hello');
  //   vm.getMovieData();
  // },1000);

  vm.getMovieData = function(searchText) {
    let results = apiService.omdbSearchRequest(vm.searchText);
    let deferred = $q.defer();
      $timeout(function () {
        deferred.resolve(results);
      }, Math.random() * 1000, false);
      return deferred.promise;


    // apiService.omdbSearchRequest(vm.searchText)
    //   .then(function() {
    //     console.log(vm.searchText);
    //     vm.movieInfo = apiService.omdbSearchRequestResult.data.Search;
    //     console.log(vm.movieInfo);
    //   })
  }

  vm.youtubeSearch = function(searchInput) {
    console.log(searchInput);
    apiService.youtubeSearchRequest(searchInput)
      .then(function() {
        vm.video = apiService.youtubeSearchRequestResult.data.items;
      })
  }

  vm.playVideo = function(id) {
    return 'https://www.youtube.com/embed/' + id;
  }



})
