const InputScreen = ({ onInputChange, onInputSubmit }) => {
    return (
        <div>
            <h2>Input Screen</h2>
            <textarea onChange={onInputChange}></textarea>
            <button onClick={onInputSubmit}>Make Model</button>
        </div>
    )
}

export default InputScreen
