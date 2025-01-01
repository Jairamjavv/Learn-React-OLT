import ReactIcon from "../assets/react.svg";

const reactDescriptions = ["Fundamental", "Important", "Core", "Crucial"];

function genRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// eslint-disable-next-line react/prop-types
function HeaderComponent({ headerName }) {
    const description =
        reactDescriptions[genRandomInt(reactDescriptions.length)];
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "black",
                color: "white",
            }}
        >
            <img src={ReactIcon} alt="React icon" />
            <h1>{headerName}</h1>
            <p>
                {description + " "}
                React concepts you will need for almost any react app.
            </p>
        </header>
    );
}

export { HeaderComponent };
