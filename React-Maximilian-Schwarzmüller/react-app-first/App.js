import React from "react";

const content = [
    [
        "React is extremely popular",
        "It makes building complex, interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem",
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering",
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)",
    ],
    [
        "React was created by Facebook",
        "Millions of top companies use React",
        "It's an open-source project with ongoing development",
        "React was first deployed in 2013",
        "React was headed by Jordan Walke",
    ]
];

const App = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div>
            <header>
                <div>
                    <h1>React JS</h1>
                    <p>Using React Library</p>
                </div>
            </header>

            <div>
                <menu>
                    <button onClick={() => setActiveIndex(0)}>
                        Why React?
                    </button>
                    <button onClick={() => setActiveIndex(1)}>
                        Core Features
                    </button>
                    <button onClick={() => setActiveIndex(2)}>
                        Related Resources
                    </button>
                    <button onClick={() => setActiveIndex(3)}>
                        A Bit of History
                    </button>
                </menu>
                <div>
                    <ul>
                        {content[activeIndex].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { App };
