import React from 'react';
import {Track} from './track';



class Jukebox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tracks);
    let tracks = Object.keys(this.props.tracks).map((track) => {
      return <Track isPlaying={this.props.isPlaying} isRecording={this.props.isRecording} onPlay={this.props.onPlay} track={this.props.tracks[track]} />;
    });
    return (
      <div>
        {tracks}
      </div>
    );

  }

}

export default Jukebox;
