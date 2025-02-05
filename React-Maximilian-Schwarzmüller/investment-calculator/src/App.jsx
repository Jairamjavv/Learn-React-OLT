import * as React from "react";
import { Header } from "./components/Header";
import { InvestmentEntry } from "./components/InvestmentEntry";
import { InvestmentResults } from "./components/InvestmentResults";

export const INVESTMENT_ENTRY_INITIAL_STATE = {
    initialInvestment: 10000,
    expectedReturn: 6,
    annualInvestment: 1200,
    duration: 10,
};

function App() {
    // initial values for the investment object
    // Lifting the state up to the App component
    const [investment, setInvestment] = React.useState(
        INVESTMENT_ENTRY_INITIAL_STATE
    );

    function handleChangeInvestment(event) {
        setInvestment((prevInvestment) => ({
            ...prevInvestment,
            [event.target.id]: parseInt(event.target.value),
        }));
    }

    let isValidInput = false;
    if (
        investment.initialInvestment < 1 ||
        investment.expectedReturn < 1 ||
        investment.annualInvestment < 1 ||
        investment.duration < 1
    ) {
        isValidInput = false;
    } else {
        isValidInput = true;
    }

    return (
        <React.Fragment>
            <Header />
            <InvestmentEntry
                handleChangeInvestment={handleChangeInvestment}
                investment={investment}
            />
            {!isValidInput && (
                <p className="center">Please enter a valid input</p>
            )}
            {isValidInput && <InvestmentResults investment={investment} />}
        </React.Fragment>
    );
}

export default App;
