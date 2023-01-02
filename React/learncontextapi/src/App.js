import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColor';
function App() {
  return (
    <ColorProvider>
      <SelectColors />
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
