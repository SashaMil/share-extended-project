movieApp.controller('displayMovieController', function(dataBaseService, $mdDialog) {
  let vm = this;
  vm.currentNavItem = 'display';

  vm.displayMovie = function() {
    dataBaseService.getMovieInfo()
    .then(function(response) {
      vm.movieList = response.data;
      console.log(vm.movieList);
    })
  }

  vm.showAdvanced = function(ev, movie) {
    dataBaseService.storeInService(movie);
   $mdDialog.show({
     controller: 'movieEditorController',
     templateUrl: 'views/movieEditor.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true,
     fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
   })
   .then(function(answer) {
     vm.status = 'You said the information was "' + answer + '".';
   }, function() {
     vm.status = 'You cancelled the dialog.';
   });
 };
  vm.displayMovie();
})
