import PropTypes from "prop-types";

function CoreConceptsComponent(props) {
    return (
        <ul
            style={{
                listStyleType: "none",
                backgroundColor: "darkgreen",
                padding: "30px",
                margin: "3px",
                width: "400px",
            }}
        >
            <li style={{ color: "yellow" }}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        </ul>
    );
}

CoreConceptsComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export { CoreConceptsComponent };
