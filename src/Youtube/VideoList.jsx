import React, {Component} from 'react';
import VideoItem from "./VideoItem";

class VideoList extends Component {

  render() {
    const {videos} = this.props;

    return (
      <div className={`ui relaxed divided list`}>
        {this.renderVideoList(videos)}
      </div>
    );
  }

  renderVideoList(videos) {
    return videos.map((video, index) => {
      return <VideoItem onVideoSelect={this.props.onVideoSelect} key={index} videoObj={video}/>;
    })
  }

  // onVideoSelect = (videoObj) => {
  //   console.log('VideoList VideoObj selected', videoObj);
  //   this.props.onVideoSelect(videoObj);
  // }
}

export default VideoList;
