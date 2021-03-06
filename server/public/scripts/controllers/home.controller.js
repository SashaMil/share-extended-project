movieApp.controller('homeController', function(apiService, dataBaseService, $q, $timeout) {
  let vm = this;
  vm.currentNavItem = 'home';
  vm.searchText = null;

  // Search array of movie suggestions by userinput title text
  vm.getMovieDataBySearch = function(searchText) {
    return apiService.omdbSearchRequest(vm.searchText).then(function(response) {
      console.log('response', response);
      return response;
    });

    // let results = searchText ? apiService.omdbSearchRequest(vm.searchText): [];
    // let deferred = $q.defer();
    // $timeout(function () {
    //   deferred.resolve(results);
    // },200, false);
    // return deferred.promise;
  }

  // Get one movie by its official title
  vm.getMovieDataByTitle = function(titleText) {
    console.log('in getMovieDataByTitle', titleText)
    console.log(vm.selectedItem)
    apiService.omdbByTitleRequest(vm.selectedItem.Title)
      .then(function(response) {
        $timeout(function() {
        },200, false);
        vm.movieInfo = response.data;
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

  vm.addMovie = function(obj) {
    dataBaseService.postMovieInfo(obj)
    .then(function(response) {
      $timeout(function() {
      },200,false);
      alert('Successfully added movie!')
      vm.movieInfo = {};
      vm.selectedItem = "";
      vm.searchText = "";
    })
  }

  vm.resetSearch = function() {
    vm.movieInfo = {};
    vm.selectedItem = "";
    vm.searchText = null;
  }



})
