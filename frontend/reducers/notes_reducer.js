import { KEY_PRESSED, KEY_RELEASED, GROUP_UPDATE } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';

const _defaultState = [];

const notesReducer = (state = _defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case KEY_PRESSED:
      if (NOTE_NAMES.includes(action.key) && !state.includes(action.key)) {
        newState = [...state, action.key];
        return newState;
      } else {
        return state;
      }
    case KEY_RELEASED:
      newState = [...state];
      if (newState.includes(action.key)) {
        newState.splice(newState.indexOf(action.key), 1);
        return newState;
      } else {
        return newState;
      }
    case GROUP_UPDATE:
      newState = action.notes;
      return newState;
    default:
      return state;
  }
};

export default notesReducer;
