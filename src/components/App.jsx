class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentIndex: 0,
      key: window.YOUTUBE_API_KEY,
      maxResults: 5
    };
  }

  componentDidMount() {
    this.search('cats');
  }
  
  updateVideos(videos) {
    console.log(videos);
    this.setState({ videos: videos });
  }

  clickVideo(index) {
    this.setState({ currentIndex: index });
  }

  enterSearch(e) {
    this.search(e.target.value);
  }

  search(query) {
    this.props.searchYouTube({ query: query, key: this.state.key, max: this.state.maxResults }, this.updateVideos.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search">
              <Search enterSearch={this.enterSearch.bind(this)} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="player">
              <VideoPlayer video={this.state.videos[this.state.currentIndex]} />
            </div>
          </div>
          <div className="col-md-5">
            <div id="list">
              <VideoList videos={this.state.videos} clickVideo={this.clickVideo.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }  

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
