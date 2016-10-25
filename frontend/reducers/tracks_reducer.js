import {ADD_NOTES, START_RECORDING, STOP_RECORDING} from "../actions/tracks_actions";
import {merge} from 'lodash';
let currTrackId = 0;

const tracksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let newTrack = { id: currTrackId, name: `Track ${currTrackId}`, roll: [], timeStart: action.timeNow};
      newState[currTrackId] = newTrack;
      return newState;
    case STOP_RECORDING:
      newState[currTrackId].roll.push({notes: [], timeSlice: action.timeNow - state[currTrackId].timeStart});
      return newState;
    case ADD_NOTES:
      newState[currTrackId].roll.push({notes: action.notes, timeSlice: action.timeNow - state[currTrackId].timeStart});
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
