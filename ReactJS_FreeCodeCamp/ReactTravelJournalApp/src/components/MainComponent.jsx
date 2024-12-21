import SectionComponent from "./SectionComponent";
import ContactComponent from "./ContactComponent";
import dateLog from "../constants/travelLog.json";
const MainComponent = () => {
    return (
        <div>
            {dateLog.map((log) => (
                <SectionComponent key={log.entry_id} log={log} />
            ))}
            <ContactComponent />
        </div>
    );
};

export default MainComponent;
