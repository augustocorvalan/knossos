import {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

const InputScreen = ({ defaultValues = [], onInputChange, onInputSubmit }) => {
    const [inputs, setInputs] = useState([])

    useEffect(() => onInputChange(inputs), [inputs])

    const handleInputChange = (index, event) => {
        const value = event.target.value 
        const newInputs = Array.from(inputs)
        newInputs[index] = value
        console.log("inputss", index, newInputs)
        setInputs(newInputs)
    }
    return (
        <div>
            <h3>enter texts to combine</h3>
            <div>
                <textarea cols="35" rows="35" onChange={(e) => handleInputChange(0, e)} defaultValue={defaultValues[0]}></textarea>
                <textarea cols="35" rows="35" onChange={(e) => handleInputChange(1, e)} defaultValue={defaultValues[1]}></textarea>
            </div>
            <button onClick={onInputSubmit}>Make Model</button>
        </div>
    )
}

InputScreen.propTypes = {
    defaultValue: PropTypes.arrayOf(PropTypes.string),
    onInputChange: PropTypes.func,
    onInputSubmit: PropTypes.func
  };

export default InputScreen
