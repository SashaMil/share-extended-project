movieApp.controller('homeController', function(apiService, dataBaseService, $q, $timeout) {
  let vm = this;
  vm.currentNavItem = 'home';

  // vm.timeGetMovieData = setTimeout(function(searchText) {
  //   console.log('hello');
  //   vm.getMovieData();
  // },1000);

  vm.searchText = null;


  vm.getMovieData = function(searchText) {
    let results = searchText ? apiService.omdbSearchRequest(vm.searchText): [];
    let deferred = $q.defer();
    $timeout(function () {
      deferred.resolve(results);
    },200, false);
      console.log(deferred.promise);
      // if (deferred.promise.$$state.value === undefined) {
      //   return [];
      // }
    return deferred.promise;

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
