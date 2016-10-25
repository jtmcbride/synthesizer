import {ADD_NOTES, START_RECORDING, STOP_RECORDING} from "../actions/tracks_actions";
import {merge} from 'lodash';

const isRecordingReducer = (state=false,action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch(action.type) {
    case START_RECORDING:
      newState = true;
      return newState;
    case STOP_RECORDING:
      newState = false;
      return newState;
    default:
      return state;
  }
};


export default isRecordingReducer;
