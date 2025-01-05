/* eslint-disable react/prop-types */
const SectionComponent = ({ children, ...props }) => {
    return <section {...props}>{children}</section>;
};

export { SectionComponent };
