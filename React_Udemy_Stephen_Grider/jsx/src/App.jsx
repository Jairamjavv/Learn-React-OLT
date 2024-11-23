import "./App.css";

function App() {
    const minValue = 18;
    const maxValue = 35;

    return (
        <>
            <input
                type="text"
                placeholder="Enter your name"
                autoFocus={true}
                spellCheck={true}
            />
            <input
                type="number"
                min={minValue}
                max={maxValue}
                placeholder="Enter your age"
                style={{ width: "200px" }}
            />
        </>
    );
}

export default App;
