ReactDOM.render(
  <App searchYouTube={window.searchYouTube} 
    searchKey={window.YOUTUBE_API_KEY} 
    defaultVideo={window.exampleVideoData[0]} />, 
  document.getElementById('app')
);
