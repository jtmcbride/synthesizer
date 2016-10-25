import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Note from './util/note.js';
import Root from './components/root';

window.note = Note;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store} />,document.getElementById('root'));
});
