import { Fragment } from "react";

import HeaderComponent from "./Components/HeaderComponent";
import MainComponent from "./Components/MainComponent";
import FooterComponent from "./Components/FooterComponent";
import reactLogo2 from "./assets/react-2.svg";

function App() {
    return (
        <Fragment>
            <HeaderComponent
                logoPath={reactLogo2}
                logoAltText={"React Logo Text"}
            />
            <MainComponent />
            <FooterComponent />
        </Fragment>
    );
}

export default App;
