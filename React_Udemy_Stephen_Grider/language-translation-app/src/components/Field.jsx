import PropTypes from "prop-types";
import Flower from "../assets/svg/flower";

const Field = ({ value, onChange }) => {
    return (
        <div className="field">
            <Flower className="flower-right" fill="rgb(110, 140, 119)" />
            <Flower className="flower-left" fill="rgb(249, 148, 59)" />
            <h1>Language Translation App</h1>
            <label htmlFor="enter_english">Enter in English</label>
            <input
                type="text"
                className="input"
                name="enter_english"
                placeholder="Enter in English"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

Field.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
export default Field;
