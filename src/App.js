import { useState } from "react"
import Markov from "ez-markov"

import InputScreen from "./InputScreen"
import GenerationScreen from "./GenerationScreen"
import logo from './logo.svg';
import './App.css';
import SavedOutputScreen from "./SavedOutputScreen"


const SCREENS = {
  INPUT: "INPUT",
  GENERATION: "GENERATION"
}
const HOME_SCREEN = SCREENS.INPUT

function getModel(input) {
  const model = new Markov(); // Create a Markov chain

  // Teach the chain some text.
  model.addCorpus(input);

  return model
}

function App() {
  const [currentScreen, setCurrentScreen] = useState(HOME_SCREEN)
  const [currentInput, setCurrentInput] = useState("")
  const [generationModel, setGenerationModel] = useState(null)
  const [savedOutput, setSavedOutput] = useState([])

  /**
   * @private handleInputChange
   */
  const handleInputChange = (event) => {
    const value = event.target.value 

    setCurrentInput(value)
  }
  /**
   * @private handleInputSubmit 
   */
  const handleInputSubmit = () => {
    /* create a new model out of the current user input */
    const model = getModel(currentInput)
    setGenerationModel(model)
    /* proceed to generation page */
    setCurrentScreen(SCREENS.GENERATION)
  }
  /**
   * @private saveOutput 
   */
  const saveOutput = (text) => {
    setSavedOutput([text, ...savedOutput])
  }
  return (
    <div className="App">
      {currentScreen !== HOME_SCREEN && <button onClick={() => setCurrentScreen(HOME_SCREEN)}>Home</button>}
      {currentScreen === SCREENS.INPUT && <InputScreen defaultValue={currentInput} onInputChange={handleInputChange} onInputSubmit={handleInputSubmit} /> }
      {currentScreen === SCREENS.GENERATION && <GenerationScreen generator={() => generationModel.getSentence()} onSave={saveOutput} /> }
      <SavedOutputScreen savedOutput={savedOutput} />
    </div>
  );
}

export default App;
