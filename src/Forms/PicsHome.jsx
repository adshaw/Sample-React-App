import React, {Component} from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "../components/SearchBar";
import ImageList from "./ImageList";

class PicsHome extends Component {

  state = {images: []}

  onSearchSubmit = async (term) => {
    console.log('search term in home page', term);
    const searchValue = await unsplash.get(`/search/photos`, {
      params: {query: term},

    });
    // console.log(searchValue.data.results);
    this.setState({images: searchValue.data.results});
  }

  render() {
    return (
      <div className={`container`}>
        <SearchBar onSearch={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default PicsHome;
