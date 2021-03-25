import PropTypes from 'prop-types';

const InputScreen = ({ defaultValue, onInputChange, onInputSubmit }) => {
    return (
        <div>
            <h2>Input Screen</h2>
            <textarea cols="50" rows="50" onChange={onInputChange} defaultValue={defaultValue}></textarea>
            <button onClick={onInputSubmit}>Make Model</button>
        </div>
    )
}

InputScreen.propTypes = {
    defaultValue: PropTypes.string,
    onInputChange: PropTypes.func,
    onInputSubmit: PropTypes.func
  };

export default InputScreen
