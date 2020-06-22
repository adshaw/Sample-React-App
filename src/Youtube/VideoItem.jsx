import React, {Component} from 'react';
import './youtube.css';

class VideoItem extends Component {
  render() {

    const {videoObj} = this.props;

    return (
      <div className={`item video-item`} onClick={this.onVideoSelect}>
        <img alt={`hello`} className={`ui image`} src={videoObj.snippet.thumbnails.medium.url}/>
        <div className={`content`}>
          <div className={`header`}>
            {videoObj.snippet.title}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log('videoObj', this.props.videoObj);
  }

  onVideoSelect = (event) => {
    this.props.onVideoSelect(this.props.videoObj);
  }

}

export default VideoItem;
