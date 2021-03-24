import { useState } from "react"

import InputScreen from "./InputScreen"
import GenerationScreen from "./GenerationScreen"
import logo from './logo.svg';
import './App.css';

const SCREENS = {
  INPUT: "INPUT",
  GENERATION: "GENERATION"
}
function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.INPUT)
  return (
    <div className="App">
      {currentScreen === SCREENS.INPUT && <InputScreen /> }
      {currentScreen === SCREENS.GENERATION && <GenerationScreen /> }
    </div>
  );
}

export default App;
