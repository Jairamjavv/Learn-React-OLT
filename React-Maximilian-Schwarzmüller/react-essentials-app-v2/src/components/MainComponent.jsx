import { CoreConceptsSectionComponent } from "./CoreConceptsSectionComponent";

import { CORE_CONCEPTS_CONTENT } from "../static/coreConceptContent";
import { ExamplesSectionComponets } from "./ExamplesSectionComponets";

const MainComponent = () => {
    const tabTitles = CORE_CONCEPTS_CONTENT.map((key) => {
        return key.title;
    });

    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2>Core Concepts</h2>
            <CoreConceptsSectionComponent
                coreConceptsList={CORE_CONCEPTS_CONTENT}
            />
            <ExamplesSectionComponets tabTitles={tabTitles} />
        </main>
    );
};

export { MainComponent };
