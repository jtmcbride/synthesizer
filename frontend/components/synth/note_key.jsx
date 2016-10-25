import React from 'react';


const NoteKey = ({note,pressed}) => {
  if (pressed) {
    return <div className="pressed">{note}</div>;
  } else {
    return <div>{note}</div>;
}
};

export default NoteKey;
