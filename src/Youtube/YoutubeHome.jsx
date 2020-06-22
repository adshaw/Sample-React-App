import React, {Component} from 'react';
import SearchBar from "../components/SearchBar";
import {KEY, youtube} from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class YoutubeHome extends Component {

  state = {videos: [], selectedVideo: null}

  render() {
    return (
      <div className={`ui container`}>
        <SearchBar searchTypeName={`Video Search`} onSearch={this.onTermSubmit}/>
        <div className={`ui grid`}>
          <div className={`ui row`}>
            <div className={`eleven wide column`}>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className={`five wide column`}>
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    console.log('searchVal', term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]

    })
  }

  onVideoSelect = (video) => {
    console.log('selected video', video);
    this.setState({selectedVideo: video})
  }
}

export default YoutubeHome;
