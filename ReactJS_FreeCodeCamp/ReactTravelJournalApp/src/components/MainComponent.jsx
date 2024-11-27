import SectionComponent from "./SectionComponent";
import dateLog from "../constants/travelLog.json";
const MainComponent = () => {
    return (
        <div>
            {dateLog.map((log) => (
                <SectionComponent key={log.entry_id} log={log}/>
            ))}
        </div>
    );
};

export default MainComponent;
