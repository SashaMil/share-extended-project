movieApp.controller('homeController', function(apiService, dataBaseService) {
  let vm = this;
  vm.currentNavItem = 'home';

  vm.getMovieData = function(searchInput) {
    apiService.omdbSearchRequest(searchInput)
      .then(function() {
        vm.movieInfo = apiService.omdbSearchRequestResult;
        vm.youtubeSearch(searchInput);
        console.log(vm.movieInfo);
      })
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
