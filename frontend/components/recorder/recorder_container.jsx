import { connect } from 'react-redux';
import { startRecording, stopRecording, addNotes } from '../../actions/tracks_actions';
import Recorder from './recorder';


const mapStateToProps = ({tracks, isRecording}) => ({
  tracks,
  isRecording
});

const mapDispatchToProps = dispatch => ({
  startRecording: () => dispatch(startRecording()),
  stopRecording: () => dispatch(stopRecording()),
  addNotes: notes => dispatch(addNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
