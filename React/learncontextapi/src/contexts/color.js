import { createContext, useState } from 'react';
//state와 actions을 분리해서 정의하는 게 좋음

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

//ColorProvider 컴포넌트 새로 만듬
//ColorContext.provider를 랜더링해줌
//Provider의 value로 상태를 actions로 setState를 전달

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubColor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer } = ColorContext;

export { ColorProvider, Consumer };
export default ColorContext;
