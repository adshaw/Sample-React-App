import React, {Component} from 'react';

class SearchBar extends Component {

  state = {term: ''}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className={`search-bar ui segment`}>
        <form onSubmit={this.onFormSubmit} className={`ui form`}>
          {/*<form onSubmit={event => this.onFormSubmit(event)} className={`ui form`}>*/}
          <div className={`field`}>
            <label>{this.props.searchTypeName}</label>
            <div className="ui icon input">
              <i className="search icon"></i>
              <input value={this.state.term} type="text"
                     onChange={e => this.setState({term: e.target.value})}
                     placeholder="Search..."/>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  searchTypeName: 'Search'
}

export default SearchBar;
