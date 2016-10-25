import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import { groupUpdate } from '../../actions/notes_actions';
import Jukebox from './jukebox';


const mapStateToProps = ({tracks, isPlaying, isRecording}) => ({
    tracks: tracks, isPlaying: isPlaying, isRecording: isRecording
});

const mapDispatchToProps =  dispatch => ({
  onPlay: track => e => {
    dispatch(startPlaying());
    let playBackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if (currNote < track.roll.length) {
        if (Date.now() - playBackStartTime > track.roll[currNote].timeSlice) {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote++;
        }
      } else {
        dispatch(stopPlaying());
        window.clearInterval(interval);
      }
    },1);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
