import React from 'react';
import {NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from "./note_key";

export default class Synth extends React.Component {

  constructor(props) {
    super(props);
    this.notes = {};
    NOTE_NAMES.forEach((note) => {
      this.notes[note] = new Note(TONES[note]);
    });
    console.log(this.notes);
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach(note => {
      console.log(this);
      if (this.props.notes.includes(note)) {
        this.notes[note].start();
      } else {
        this.notes[note].stop();
      }
    });
  }

  render() {
    this.playNotes();
    return (
      <div>
        {NOTE_NAMES.map((el,idx) => {
          let pressed = this.props.notes.includes(el);
          return <NoteKey note={el} pressed={pressed} key={idx}/>;
        })}
      </div>);
  }

}
