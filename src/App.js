import { useState } from "react"

import InputScreen from "./InputScreen"
import GenerationScreen from "./GenerationScreen"
import logo from './logo.svg';
import './App.css';
import MarkovGenerator from "./utils/MarkovGenerator"


const SCREENS = {
  INPUT: "INPUT",
  GENERATION: "GENERATION"
}

function getModel(input) {
  const model = new MarkovGenerator(); // Create a Markov chain

  // Teach the chain some text.
  model.feed(input);

  return model
}

function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.INPUT)
  const [currentInput, setCurrentInput] = useState("")
  const [generationModel, setGenerationModel] = useState(null)

  /**
   * @private handleInputChange
   */
  const handleInputChange = (event) => {
    const value = event.target.value 

    setCurrentInput(value)
  }
  /**
   * @private handleInputChange
   */
  const handleInputSubmit = () => {
    console.log("!!! current input", currentInput)
    /* create a new model out of the current user input */
    const model = getModel(currentInput)
    setGenerationModel(model)
    /* proceed to generation page */
    setCurrentScreen(SCREENS.GENERATION)
  }
  return (
    <div className="App">
      {currentScreen === SCREENS.INPUT && <InputScreen onInputChange={handleInputChange} onInputSubmit={handleInputSubmit} /> }
      {currentScreen === SCREENS.GENERATION && <GenerationScreen /> }
    </div>
  );
}

export default App;
