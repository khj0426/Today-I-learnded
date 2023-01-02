import React from 'react';
import { ColorProvider, Consumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <Consumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color,
            }}
          ></div>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor,
            }}
          ></div>
        </>
      )}
    </Consumer>
  );
};

export default ColorBox;
