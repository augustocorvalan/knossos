import PropTypes from 'prop-types';

const SavedOutputScreen = ({ savedOutput }) => {
    return (
      <ul>
        {savedOutput.map((output, index) => <li key={`${output}${index}`}>{output}</li>)}
      </ul>
    )
}

SavedOutputScreen.propTypes = {
    savedOutput: PropTypes.array,
  };

export default SavedOutputScreen
