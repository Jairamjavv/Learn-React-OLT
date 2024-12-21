import React from "react";
const ContactComponent = () => {
    const [funEmoji, setFunEmoji] = React.useState("🐛");

    React.useEffect(() => {
        setFunEmoji(() => {
            const emojiList = ["🐛", "🐞", "🐜", "🦗", "🦟"];
            const randomIndex = Math.floor(Math.random() * emojiList.length);
            return emojiList[randomIndex];
        });
    }, []);

    return (
        <footer>
            This is <span className="contact_name">Jairam</span>.{funEmoji} Call
            me <span className="ph_no">@1234567890</span>
        </footer>
    );
};

export default ContactComponent;
