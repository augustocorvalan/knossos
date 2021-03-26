import PropTypes from 'prop-types';

import "./SavedOutputScreen.css"

const SavedOutputItem = ({ output }) => {
  return (
    <div className="saved-output-item"><p>{output}</p></div>
  )

}

const SavedOutputScreen = ({ savedOutput }) => {
    return (
      <div className="saved-output-container">
        {savedOutput.map((output, index) => <SavedOutputItem key={`${output}${index}`} output={output} />)}
      </div>
    )
}

SavedOutputScreen.propTypes = {
    savedOutput: PropTypes.array,
  };

export default SavedOutputScreen
