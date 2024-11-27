import PropTypes from "prop-types";

const HeaderComponent = ({ logoPath, logoAltText }) => {
    return (
        <header className="nav">
            <img src={logoPath} alt={logoAltText} width={50} />
            <ul className="nav-list">
                <li>Pricing</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </header>
    );
};

HeaderComponent.propTypes = {
    logoPath: PropTypes.string.isRequired,
    logoAltText: PropTypes.string.isRequired,
};

export default HeaderComponent;
