import PropTypes from "prop-types";

const LANGUAGES = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "French", value: "fr" },
    { label: "Hindi", value: "hi" },
    { label: "Japanese", value: "ja" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Simplified Chinese", value: "zh-CN" },
    { label: "Spanish", value: "es" },
    { label: "Swahili", value: "sw" },
    { label: "Thai", value: "th" },
];

const Languages = ({ language, onLanguageChange }) => {
    return (
        <div>
            <h3 className="label">Select Language</h3>
            <div className="opts">
                {LANGUAGES.map(({ label, value }) => {
                    return (
                        <div
                            key={label}
                            className={`opt ${
                                language === value ? "selected" : ""
                            }`}
                            onClick={() => onLanguageChange(value)}
                        >
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Languages.propTypes = {
    language: PropTypes.string,
    onLanguageChange: PropTypes.func,
};

export default Languages;
