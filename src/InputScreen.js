import { useState, useEffect } from "react"
import PropTypes, { number } from "prop-types"

const DEFAULT_NUMBER_OF_INPUTS = 3

// TODO: move to shared utils, or react hooks
function range(size, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt)
}

const InputScreen = ({
    defaultValues = [],
    onInputChange = () => {},
    onInputSubmit = () => {},
}) => {
    const startingNumberOfInputs =
        defaultValues.length || DEFAULT_NUMBER_OF_INPUTS
    const [numberOfInputs, setNumberOfInputs] = useState(startingNumberOfInputs)
    const [texts, setTexts] = useState(defaultValues)

    /*
    [X] 1. keep track of how many inputs to display (2 by default)
    [X] 2. map the inputNumber to actual textarea inputs
    3. add logic to increase the input number
    4. hook user UI to this increase logic
    */

    useEffect(() => onInputChange(texts), [texts])

    const handleInputChange = (index, event) => {
        const value = event.target.value
        const newInputs = Array.from(texts)
        newInputs[index] = value
        setTexts(newInputs)
    }
    const inputComponents = range(numberOfInputs).map((inputIndex) => (
        <textarea
            cols="35"
            rows="35"
            onChange={(e) => handleInputChange(inputIndex, e)}
            defaultValue={defaultValues[inputIndex]}></textarea>
    ))
    return (
        <div>
            <h3>enter texts to combine</h3>
            <div>{inputComponents}</div>
            <button onClick={onInputSubmit}>Make Model</button>
            <button onClick={() => setNumberOfInputs(numberOfInputs + 1)}>
                Add Text Input
            </button>
        </div>
    )
}

InputScreen.propTypes = {
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    onInputChange: PropTypes.func,
    onInputSubmit: PropTypes.func,
}

export default InputScreen
