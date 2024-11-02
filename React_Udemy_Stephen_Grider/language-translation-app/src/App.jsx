import { useState } from "react";

import Field from "./components/Field";
import Translate from "./components/Translate";
import Languages from "./components/Languages";

function App() {
    const [language, setLanguage] = useState("en");
    const [text, setText] = useState("");
    return (
        <div>
            <Field onChange={setText} />
            <Languages language={language} onLanguageChange={setLanguage} />
            <hr />
            <Translate text={text} language={language} />
        </div>
    );
}

export default App;
