import React from "react";

function Message(params) {
    // props
    return <h2>{params.advice}</h2>;
}

const GettingStartedComponent = () => {
    const [advice, setAdvice] = React.useState(""); // state management for the current component

    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data?.slip?.advice);
    }
    React.useEffect(() => {
        // loads when the component is loaded
        getAdvice();
    }, []); // empty array means it will run only once

    return (
        <div>
            <h1>Advice a button click away.</h1>
            <button onClick={getAdvice}>Get Advice</button>
            <Message advice={advice} />
        </div>
    );
};

export default GettingStartedComponent;
