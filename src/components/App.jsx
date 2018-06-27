class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoIndex: 0
    };
  }

  clickVideo(index) {
    console.log(index);
    this.setState({ videoIndex: index });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id="search">
              <Search />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div id="player">
              <VideoPlayer video={this.state.videos[this.state.videoIndex]} />
            </div>
          </div>
          <div className="col-md-5">
            <div id="list">
              <VideoList videos={this.state.videos} clickCallback={this.clickVideo.bind(this)} />
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

ReactDOM.render(<App />, document.getElementById('app'));
