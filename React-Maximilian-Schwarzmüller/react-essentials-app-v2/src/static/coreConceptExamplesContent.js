export const CORE_CONCEPT_EXAMPLES_CONTENT = [
    {
        key: "Components",
        description: `
            function ComponentA() {
                return (
                <h1>This is Component A</h1>
                );
            }

            export {ComponentA};
            `,
    },
    {
        key: "JSX",
        description: `
            import {ComponentA} from "./ComponentA.jsx"
            function ComponentB() {
                return (
                <>
                <ComponentA />
                <p> This is a 'p' tag inside Component B</p>
                </>
                );
            }
            `,
    },
    {
        key: "Props",
        description: `
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
            `,
    },
    {
        key: "State",
        description: `
            const [isRainy, setIsRainy] = React.useState(false);
            return (
                <div>
                    <h1>Look outside the window and check if raining? If yes press button.</h1>
                    <p>Is today raining? {isRainy}</p>
                    <button onClick(() => setIsRainy(true))>Update here</button>
                </div>
            )
            `,
    },
];
