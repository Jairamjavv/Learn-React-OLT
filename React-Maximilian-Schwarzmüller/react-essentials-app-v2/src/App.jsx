import * as React from "react";

import { HeaderComponent } from "./components/HeaderComponent";
import { MainComponent } from "./components/MainComponent";

function App() {
    return (
        <React.Fragment>
            <HeaderComponent headerName={"React Essentials"} headerTag={"h1"} />
            <MainComponent />
        </React.Fragment>
    );
}

export default App;
