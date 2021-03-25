import { useState } from "react"
import PropTypes from 'prop-types';

import './GenerationScreen.css';

const GenerationScreen = ({ generator, onSave }) => {
    const [currentlyGenerated, setCurrentlyGenerated] = useState("")

    /**
     * @private generateNewText
     */
    const generateNewText = () => {
        const newText = generator()
        setCurrentlyGenerated(newText)
    }

    return (
        <div>
            <p className="generated-text">{currentlyGenerated}</p>
            <button onClick={generateNewText}>Generate</button>
            <button onClick={() => onSave(currentlyGenerated)}>Save</button>
        </div>
    )
}

GenerationScreen.propTypes = {
    onSave: PropTypes.func,
    generator: PropTypes.func
  };

export default GenerationScreen 
