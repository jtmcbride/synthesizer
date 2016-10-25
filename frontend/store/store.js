import { createStore } from 'redux';
import reducer from "../reducers/root_reducer";

const initialState = {
  notes: [],
  tracks: {},
  isRecording: false,
  isPlaying: false
};

const configureStore = (preloadedState = initialState) => createStore(reducer, preloadedState);

export default configureStore;
