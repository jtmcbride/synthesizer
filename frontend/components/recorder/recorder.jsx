import React from 'react';

const Recorder = ({startRecording,stopRecording,addNotes,isRecording,isPlaying}) => (
  <div className='recorder'>
  <div className='recorder-title'>
    Recorder
  </div>
  <button
    className ='start-button'
    onClick={startRecording}
    disabled={isRecording || isPlaying}>
    Start
  </button>
  <button
    className='stop-button'
    onClick={stopRecording}
    disabled={!isRecording || isPlaying}>
    Stop
  </button>
</div>
);

export default Recorder;
