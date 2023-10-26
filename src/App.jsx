import {useState} from 'react'

// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return (
    <div className={color} onClick={() => setSelectedColor(color)}></div>
  ) 
}

const Picker = () => {
  const [selectedColor, setSelectColor] = useState("");

}

const App = () => {

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectColor={setSelectColor}></Color>
        <Color color="red" setSelectColor={setSelectColor}></Color>
        <Color color="black" setSelectColor={setSelectColor}></Color>
      </div>
    </div>
  );
};

export default App;
