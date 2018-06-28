class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      query: 'cats',
      currentIndex: 0,
      maxResults: 5,
      searchInput: { value: '' }
    };
  }

  componentDidMount() {
    this.search();
  }
  
  updateVideos(videos) {
    this.setState({ videos: videos });
  }

  clickVideo(index) {
    this.setState({ currentIndex: index });
  }

  enterSearch(e) {
    this.setState({ query: e.target.value, searchInput: e.target });
    if (e.key === 'Enter') {
      this.search();
    }
  }

  search() {
    this.props.searchYouTube({ 
      query: this.state.query, 
      key: this.props.searchKey, 
      max: this.props.maxResults 
    }, this.updateVideos.bind(this));
    this.state.searchInput.value = '';
    this.state.searchInput.focus();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search">
              <Search enterSearch={this.enterSearch.bind(this)} clickSearch={this.search.bind(this)} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="player">
              <VideoPlayer video={this.state.videos.length ? this.state.videos[this.state.currentIndex] : this.props.defaultVideo} />
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
