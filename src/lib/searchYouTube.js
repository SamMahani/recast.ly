var searchUrl = 'https://www.googleapis.com/youtube/v3/search';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: searchUrl,
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true  
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('recase.ly: search request failed');
    }
  });
};

window.searchYouTube = searchYouTube;
