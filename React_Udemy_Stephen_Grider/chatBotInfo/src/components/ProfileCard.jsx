import PropTypes from "prop-types";

const ProfileCard = ({ chatBotName, chatBotImage, link }) => {
    return (
        <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-48x48">
                        <img src={chatBotImage} alt={chatBotName} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="title is-4">{chatBotName}</p>
                        <a href={link}>Here</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProfileCard.propTypes = {
    chatBotName: PropTypes.string,
    chatBotImage: PropTypes.string,
    link: PropTypes.string,
};

export default ProfileCard;
