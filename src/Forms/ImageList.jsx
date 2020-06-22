import React, {Component} from 'react';
import './imageList.css';
import ImageCard from "./ImageCard";

class ImageList extends Component {

  render() {
    return (
      <div className={`image-list`}>
        {this.getImages(this.props.images)}
      </div>
    );
  }

  getImages(imagesArr) {
    return imagesArr.map((image) => {
      return <ImageCard key={image.id} image={image}/>;
    })
  }
}

export default ImageList;
