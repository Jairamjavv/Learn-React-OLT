import PropTypes from "prop-types";

import maduraiCityPic from "../assets/madurai_city.png";
import chennaiCityPic from "../assets/chennai_city.png";

const SectionComponent = ({ log }) => {
    const getImageSource = (entryId) => {
        switch (entryId) {
            case 1:
                return maduraiCityPic;
            case 2:
                return chennaiCityPic;
            default:
                return maduraiCityPic;
        }
    };
    return (
        <section>
            <div className="left">
                <div className="section-image">
                    <img src={getImageSource(log.entry_id)} alt="City" />
                </div>
            </div>
            <div className="right">
                <div className="title">{log.title}</div>
                <div className="datetime">{log.datetime}</div>
                <div className="content">{log.description}</div>
            </div>
        </section>
    );
};

SectionComponent.propTypes = {
    log: PropTypes.shape({
        entry_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        datetime: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default SectionComponent;
