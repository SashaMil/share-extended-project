movieApp.service('apiService', function($http) {
  let vm = this;

  vm.youtubeSearchRequest = function(searchInput) {
    console.log('in Youtube Search Request');
    return $http.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        q: searchInput,
        part: 'snippet,id',
        key: 'AIzaSyDt83EQsgV8wxVmTeoarCVFrwb18vbx_Jc',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    })
    .then(function(response) {
      vm.youtubeSearchRequestResult = response;
    })
    .catch(function(error) {
      console.log(`Error getting Youtube Search Result ${error}`);
    })
  }

  vm.omdbSearchRequest = function(searchInput) {
    console.log('in OMDB Search Request');
    return $http.get(`http://www.omdbapi.com/?apikey=2981f0cd&`, {
      params: {
        s: searchInput,
        type: 'movie'
      }
    })
    .then(function(response) {
      vm.omdbSearchRequestResult = response;
    })
    .catch(function(error) {
      console.log(`Error getting OMDB Search Result ${error}`);
    })
  }
})
