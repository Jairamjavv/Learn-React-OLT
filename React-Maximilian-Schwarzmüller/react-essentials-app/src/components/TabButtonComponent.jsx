/* eslint-disable react/prop-types */
function TabButtonComponent({ children, handleClick }) {
    const buttonName = children;
    return (
        <li>
            <button
                style={{
                    width: "250px",
                    height: "50px",
                    borderRadius: "10px",
                    margin: "5px",
                    backgroundColor: "blue",
                    color: "white",
                }}
                onClick={handleClick}
            >
                {buttonName}
            </button>
        </li>
    );
}

export { TabButtonComponent };
