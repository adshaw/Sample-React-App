import React from 'react';
import {connect} from "react-redux";

const SongDetail = ({mySelectedSong}) => {
  // console.log('props in song detail', props);
  if (!mySelectedSong) {
    return <div>Select a song</div>
  }

  return (
    <div>
      <h3>{mySelectedSong.title}</h3>
      <p>
        <span>Duration: {mySelectedSong.duration}</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {mySelectedSong: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
