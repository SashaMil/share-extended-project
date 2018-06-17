movieApp.controller('homeController', function(apiService, dataBaseService, $q, $timeout) {
  let vm = this;
  vm.currentNavItem = 'home';
  vm.searchText = null;

  // Search array of movie suggestions by userinput title text
  vm.getMovieDataBySearch = function(searchText) {
    let results = searchText ? apiService.omdbSearchRequest(vm.searchText): [];
    let deferred = $q.defer();
    $timeout(function () {
      deferred.resolve(results);
    },200, false);
      return deferred.promise;
  }

  // Get one movie by its official title
  vm.getMovieDataByTitle = function(titleText) {
    console.log('in getMovieDataByTitle', titleText)
    apiService.omdbByTitleRequest(vm.selectedItem.Title)
      .then(function(response) {
        $timeout(function() {
        },200, false);
        vm.movieInfo = response.data;
        vm.youtubeSearch(vm.selectedItem.Title);
      })
  }

  // Search youtube for trialer of Movie with movie title input
  vm.youtubeSearch = function(searchInput) {
    console.log(searchInput);
    apiService.youtubeSearchRequest(searchInput)
      .then(function() {
        vm.video = apiService.youtubeSearchRequestResult.data.items;
      })
  }

  // Renders youtube search result in DOM
  vm.playVideo = function(id) {
    return 'https://www.youtube.com/embed/' + id;
  }

})
