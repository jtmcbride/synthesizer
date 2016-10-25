import { START_PLAYING, STOP_PLAYING } from '../actions/playing_actions';

const isPlayingReducer = (state=false, action) => {
  let newState;
  switch(action.type) {
    case START_PLAYING:
      newState = true;
      return newState;
    case STOP_PLAYING:
      newState = false;
      return newState;
    default:
      return state;
  }
};

export default isPlayingReducer;
