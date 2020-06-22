import React, {Component} from 'react';

class VideoDetail extends Component {
  render() {
    const {video} = this.props;
    if(!video){
      return <h4>Loading...</h4>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className={`video-detail`}>
        <div className={`ui embed`}>
          <iframe className="video-stream"
                 src={videoSrc}/>
        </div>
        <div className={`ui segment`}>
          <h4 className={`ui header`}>{video.snippet.title}</h4>
          <p className={``}>{video.snippet.description}</p>
        </div>
      </div>

    );
  }
}

export default VideoDetail;
