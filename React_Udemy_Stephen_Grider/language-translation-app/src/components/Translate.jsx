import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const useTranslation = (text, language) => {
    const [translated, setTranslated] = React.useState("");

    React.useEffect(() => {
        if (!text) {
            return;
        }

        doTranslation(text, language, setTranslated);
    }, [text, language]);

    return [translated];
};

const debounce = (fn) => {
    let id = null;
    return (...args) => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            fn(...args);
            id = null;
        }, 300);
    };
};

const doTranslation = debounce(async (input, languageCode, callback) => {
    try {
        const { data } = await axios.get(
            `https://api.mymemory.translated.net/get?q=${input}!&langpair=en|${languageCode}`
        );
        callback(data?.responseData?.translatedText);
    } catch (error) {
        console.log(error);
    }
});

const Translate = ({ language, text }) => {
    const [translated] = useTranslation(text, language);

    return (
        <div className="translate">
            <label className="label">Output</label>
            <h1 className="title">{translated.replace("&#39;", "'")}</h1>
        </div>
    );
};

Translate.propTypes = {
    language: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Translate;
