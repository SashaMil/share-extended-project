movieApp.controller('movieEditorController', function(dataBaseService, $mdDialog) {
  let vm = this;

  vm.getMovieData = function() {
    vm.movieInfo = dataBaseService.sharedData
  }

  // vm.handleDialog = function() {
  //   vm.hide = function() {
  //     $mdDialog.hide();
  //   };
  //   vm.cancel = function() {
  //     $mdDialog.cancel();
  //   };
  //   vm.answer = function(answer) {
  //     $mdDialog.hide(answer);
  //   };
  // }

  vm.getMovieData();
});
