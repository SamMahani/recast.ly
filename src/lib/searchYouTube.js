var searchUrl = 'https://www.googleapis.com/youtube/v3/search';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: searchUrl,
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true  
    },
    success: function(data) {
      console.log(data);
      callback(data.items);
    },
    error: function() {
      console.log('recase.ly: search request failed');
    }

  });


};

window.searchYouTube = searchYouTube;
