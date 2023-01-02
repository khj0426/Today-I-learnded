import { Consumer } from '../contexts/color';

const Colors = ['red', 'orange', 'yellow', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <Consumer>
      {({ actions }) => (
        <div style={{ display: 'flex' }}>
          {Colors.map((color) => (
            <div
              key={color}
              onClick={() => actions.setColor(color)}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
            ></div>
          ))}
        </div>
      )}
    </Consumer>
  );
};

export default SelectColors;
