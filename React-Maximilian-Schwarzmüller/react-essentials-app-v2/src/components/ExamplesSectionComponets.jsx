/* eslint-disable react/prop-types */
import * as React from "react";

import { TabButtonComponent } from "./TabButtonComponent";
import { CORE_CONCEPT_EXAMPLES_CONTENT } from "../static/coreConceptExamplesContent";
import { SectionComponent } from "./SectionComponent";

const ExamplesSectionComponets = ({ tabTitles }) => {
    const [selectedTopic, setSelectedTopic] = React.useState(
        "Please select a topic"
    );

    function handleClick(selectedButton) {
        for (const CORE_CONCEPT of CORE_CONCEPT_EXAMPLES_CONTENT) {
            if (CORE_CONCEPT.key === selectedButton) {
                setSelectedTopic(CORE_CONCEPT.description);
            }
        }
    }
    return (
        <SectionComponent
            id="examples"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
            }}
        >
            <h1>Examples</h1>
            <menu
                style={{
                    listStyleType: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                {tabTitles.map((key) => (
                    <TabButtonComponent
                        key={key}
                        handleClick={() => handleClick(key)}
                    >
                        {key}
                    </TabButtonComponent>
                ))}
            </menu>
            <p
                style={{
                    backgroundColor: "darkblue",
                    color: "white",
                    padding: "30px",
                }}
            >
                {selectedTopic}
            </p>
        </SectionComponent>
    );
};

export { ExamplesSectionComponets };
