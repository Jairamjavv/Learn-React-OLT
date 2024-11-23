import "bulma/css/bulma.css";
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
    const [isDark, setIsDark] = useState(false);
    
    const chatBotInfo = [
        {
            name: "Alexa",
            image: "https://img.icons8.com/color/48/amazon-alexa-logo.png",
            link: "https://www.alexa.com/",
        },
        {
            name: "Siri",
            image: "https://img.icons8.com/color/48/siri.png",
            link: "https://www.apple.com/in/siri/",
        },
        {
            name: "ChatGPT",
            image: "https://img.icons8.com/ios/50/chatgpt.png",
            link: "https://openai.com/index/chatgpt/",
        },
    ];

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`${isDark ? 'has-background-dark' : 'has-background-light'}`}>
            <div className="container">
                <div className="section">
                    <div className="level">
                        <div className="level-left">
                            <h1 className={`title ${isDark ? 'has-text-light' : 'has-text-dark'}`}>
                                Chat Bot Info
                            </h1>
                        </div>
                        <div className="level-right">
                            <button 
                                className={`button ${isDark ? 'is-light' : 'is-dark'}`}
                                onClick={toggleTheme}
                            >
                                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
                            </button>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-4">
                            {chatBotInfo.map((chatBot) => (
                                <ProfileCard
                                    key={chatBot.name}
                                    chatBotName={chatBot.name}
                                    chatBotImage={chatBot.image}
                                    link={chatBot.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
