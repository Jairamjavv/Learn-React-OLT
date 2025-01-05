/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ children, className, mode = "filled", Icon, ...props }) => {
    let cssClasses = `button ${mode}-button`;

    if (Icon) {
        cssClasses += " icon-button";
    }

    if (className) {
        cssClasses += " " + className;
    }
    return (
        <button className={cssClasses} {...props} mode={mode}>
            {Icon && (
                <span className="button-icon">
                    <Icon />
                </span>
            )}
            <span>{children}</span>
        </button>
    );
};

export { Button };
