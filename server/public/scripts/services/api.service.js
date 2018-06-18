movieApp.service('apiService', function($http) {
  let vm = this;

  // API request to OMDB database for array of movies
  vm.omdbSearchRequest = function(searchInput) {
    console.log('in OMDB Search Request');
    let formatSearchInput = searchInput.split(" ")
    if (formatSearchInput.length > 1) {
      formatSearchInput = formatSearchInput.join("+");
    }
    else {
      formatSearchInput = formatSearchInput.join("");
    }
    console.log(formatSearchInput);
    return $http.get(`http://www.omdbapi.com/?apikey=2981f0cd&`, {
      params: {
        s: formatSearchInput
      }
    })
    .then(function(response) {
      console.log(response);
      vm.omdbSearchRequestResult = response.data.Search;
      if (vm.omdbSearchRequestResult === undefined) {
        return [];
      }
      return vm.omdbSearchRequestResult;
    })
    .catch(function(error) {
      console.log(`Error getting OMDB Search Result ${error}`);
      return [];
    })
  }

  // API request to OMDB database to get back one movie and all of its properties
  vm.omdbByTitleRequest = function(titleText) {
    console.log('in Service omdbByTitleRequest', titleText);
    return $http.get(`http://www.omdbapi.com/?apikey=2981f0cd&`, {
      params: {
        t: titleText
      }
    })
    .then(function(response) {
      console.log(response);
      return response;
    })
  }

  // API request to youtube
  vm.youtubeSearchRequest = function(searchInput) {
    console.log('in Youtube Search Request');
    return $http.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        q: searchInput + ' trailer',
        part: 'snippet,id',
        key: 'AIzaSyDt83EQsgV8wxVmTeoarCVFrwb18vbx_Jc',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    })
    .then(function(response) {
      console.log(response);
      vm.youtubeSearchRequestResult = response;
    })
    .catch(function(error) {
      console.log(`Error getting Youtube Search Result ${error}`);
    })
  }

})
