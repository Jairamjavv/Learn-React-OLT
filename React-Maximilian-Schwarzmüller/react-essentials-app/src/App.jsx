import { HeaderComponent } from "./components/HeaderComponent";
import { CoreConceptsComponent } from "./components/CoreConceptsComponent";
import { TabButtonComponent } from "./components/TabButtonComponent";
import React from "react";

const CORE_CONCEPTS_CONTENT = [
    {
        title: "Components",
        description: "The core UI building block",
    },
    {
        title: "JSX",
        description: "Returns dynamic HTML code",
    },
    {
        title: "Props",
        description: "Make components configurable by passing data as props",
    },
    {
        title: "State",
        description:
            "React managed data, when changed causes the component to render",
    },
];

function App() {
    const [selectedTopic, setSelectedTopic] = React.useState(
        "Please select a topic"
    );
    function handleClick(selectedButton) {
        switch (selectedButton) {
            case "Components":
                setSelectedTopic(
                    `
                    function ComponentA() {
                        return (
                        <h1>This is Component A</h1>
                        );
                    }

                    export {ComponentA};
                    `
                );
                break;
            case "JSX":
                setSelectedTopic(
                    `
                    import {ComponentA} from "./ComponentA.jsx"
                    function ComponentB() {
                        return (
                        <>
                        <ComponentA />
                        <p> This is a 'p' tag inside Component B</p>
                        </>
                        );
                    }
                    `
                );
                break;
            case "Props":
                setSelectedTopic(
                    `
                    function Car({brand, model, price}) {
                        return (
                            <h1> This car brand is {brand}. The model is {model}. The price is {price}</h1>
                        );
                    }
                    function MarutiCar() {
                        return (
                            <Car brand={"Maruti"} model={"Dzire"} price={"500000"} />
                        );
                    }
                    `
                );
                break;
            case "State":
                setSelectedTopic(
                    `
                    const [isRainy, setIsRainy] = React.useState(false);
                    return (
                        <div>
                            <h1>Look outside the window and check if raining? If yes press button.</h1>
                            <p>Is today raining? {isRainy}</p>
                            <button onClick(() => setIsRainy(true))>Update here</button>
                        </div>
                    )
                    `
                );
                break;
        }
    }

    return (
        <div>
            <HeaderComponent headerName={"React Essentials"} />
            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2>Core Concepts</h2>
                <section
                    id="core-concepts"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        width: "100%",
                    }}
                >
                    {CORE_CONCEPTS_CONTENT.map((key) => {
                        <CoreConceptsComponent
                            title={key.title}
                            description={key.description}
                        />;
                    })}
                    <CoreConceptsComponent
                        title="Components"
                        description="The core UI building block"
                    />
                    <CoreConceptsComponent
                        title="JSX"
                        description="Returns dynamic HTML code"
                    />
                    <CoreConceptsComponent
                        title="Props"
                        description="Make components configurable by passing data as props"
                    />
                    <CoreConceptsComponent
                        title="State"
                        description="React managed data, when changed causes the component to render"
                    />
                </section>
                <section
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
                        {["Components", "JSX", "Props", "State"].map((key) => (
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
                </section>
            </main>
        </div>
    );
}

export default App;
