import { useState } from "react"
import Markov from "ez-markov"

import InputScreen from "./InputScreen"
import GenerationScreen from "./GenerationScreen"
import logo from "./logo.svg"
import "./App.css"
import SavedOutputScreen from "./SavedOutputScreen"
import Header from "./Header"

const SCREENS = {
    INPUT: "INPUT",
    GENERATION: "GENERATION",
}
const HOME_SCREEN = SCREENS.INPUT

function getModel(inputs) {
    const model = new Markov() // Create a Markov chain

    inputs.forEach((input) => model.addCorpus(input))

    return model
}

function App() {
    const [currentScreen, setCurrentScreen] = useState(HOME_SCREEN)
    const [currentInputs, setCurrentInputs] = useState([])
    const [generationModel, setGenerationModel] = useState(null)
    const [savedOutput, setSavedOutput] = useState([])

    /**
     * @private handleInputSubmit
     */
    const handleInputSubmit = () => {
        /* create a new model out of the current user input */
        const model = getModel(currentInputs)
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
            <Header />
            {currentScreen !== HOME_SCREEN && (
                <button onClick={() => setCurrentScreen(HOME_SCREEN)}>
                    Revise Inputs
                </button>
            )}
            {currentScreen === SCREENS.INPUT && (
                <InputScreen
                    defaultValues={currentInputs}
                    onInputChange={setCurrentInputs}
                    onInputSubmit={handleInputSubmit}
                />
            )}
            {currentScreen === SCREENS.GENERATION && (
                <GenerationScreen
                    generator={() => generationModel.getSentence()}
                    onSave={saveOutput}
                />
            )}
            <SavedOutputScreen savedOutput={savedOutput} />
        </div>
    )
}

export default App
