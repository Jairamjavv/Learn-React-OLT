/* eslint-disable react/prop-types */
const InvestmentEntry = ({ handleChangeInvestment, investment }) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">
                        Initial Investment
                    </label>
                    <input
                        type="number"
                        id="initialInvestment"
                        value={investment.initialInvestment}
                        onChange={handleChangeInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input
                        type="number"
                        id="expectedReturn"
                        value={investment.expectedReturn}
                        onChange={handleChangeInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        value={investment.annualInvestment}
                        onChange={handleChangeInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        id="duration"
                        value={investment.duration}
                        onChange={handleChangeInvestment}
                    />
                </p>
            </div>
        </section>
    );
};

export { InvestmentEntry };
