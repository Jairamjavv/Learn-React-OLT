/* eslint-disable react/prop-types */
import { CoreConceptsComponent } from "./CoreConceptsComponent";
// Forward props
import { SectionComponent } from "./SectionComponent";

const CoreConceptsSectionComponent = ({ coreConceptsList }) => {
    return (
        <SectionComponent
            id="core-concepts"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
            }}
        >
            {coreConceptsList.map((key) => (
                <CoreConceptsComponent
                    key={key.title}
                    title={key.title}
                    description={key.description}
                />
            ))}
        </SectionComponent>
    );
};

export { CoreConceptsSectionComponent };
