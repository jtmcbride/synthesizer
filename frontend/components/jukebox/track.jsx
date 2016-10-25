import React from 'react';

export const Track = ({isRecording, isPlaying, track, onPlay}) => (
  <div>
    {track.name}
    <button onClick={onPlay(track)}>Play</button>
  </div>
);
