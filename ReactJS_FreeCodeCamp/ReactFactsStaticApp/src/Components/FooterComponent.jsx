const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <small>
                © {currentYear} JRM - React Facts
            </small>
        </footer>
    );
};

export default FooterComponent;
