import PropTypes from 'prop-types';

const InputScreen = ({ defaultValue, onInputChange, onInputSubmit }) => {
    return (
        <div>
            <h3>input texts</h3>
            <div>
                <textarea cols="35" rows="35" onChange={onInputChange} defaultValue={defaultValue}></textarea>
            </div>
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
