import globeLogo from "../assets/globe_image.jpg";

const HeaderComponent = () => {
    return (
        <header>
            <img src={globeLogo} alt="Globe Image" />
            <h1>My Travel Journal</h1>
        </header>
    );
};

export default HeaderComponent;
