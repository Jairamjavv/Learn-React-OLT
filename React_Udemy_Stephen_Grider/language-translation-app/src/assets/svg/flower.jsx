import PropTypes from "prop-types";

// Flower component that renders an SVG flower with customizable fill color and className
function Flower({ fill, className }) {
    return (
        // Main SVG container with accessibility and display properties
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            viewBox="-5.0 -2.3 471.8 417.4"
            zoomAndPan="magnify"
            style={{ fill: "rgb(0, 0, 0)", display: "none" }}
            aria-label="Beautiful Flower Petals"
        >
            {/* Group element containing all flower petals */}
            <g
                fillRule="evenodd"
                id="__id497_s23gcykd0y"
                opacity=".4"
                style={{ fill }}
            >
                {/* Bottom left petal */}
                <path
                    d="m205.84 154.94c-9.4428-62.952-61.538-87.745-82.467-96.946..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Inner bottom left petal detail */}
                <path
                    d="m176.92 180.66c5.4346-24.979 5.2699-36.327-9.836-52.067..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Top left petal */}
                <path
                    d="m225.26 152.34c24.35-7.7831 34.095-13.6 40.174-34.552..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Top center petal */}
                <path
                    d="m275.26 178.51c18.915 17.196 28.825 22.727 50.01 17.516..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Top right petal */}
                <path
                    d="m278.75 238.95c-5.4346 24.979-5.2699 36.327 9.836 52.068..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Right center petal */}
                <path
                    d="m234.19 267.9c-24.35 7.7831-34.095 13.6-40.174 34.552..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Bottom right petal */}
                <path
                    d="m188.59 241.73c-18.915-17.196-28.825-22.727-50.01-17.516..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Outer decorative swirl - left */}
                <path
                    d="m264.41 160.7c49.797-39.654 45.22-97.166 42.724-119.89..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Outer decorative swirl - top */}
                <path
                    d="m289.53 212.42c59.24 23.298 106.76-9.4209 125.19-22.946..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Outer decorative swirl - right */}
                <path
                    d="m253.81 258.52c9.4428 62.952 61.538 87.745 82.467 96.946..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Outer decorative swirl - bottom right */}
                <path
                    d="m196.78 252c-49.797 39.654-45.22 97.166-42.724 119.89..."
                    style={{ fill: "inherit" }}
                ></path>

                {/* Outer decorative swirl - bottom */}
                <path
                    d="m172.32 200.95c-59.24-23.298-106.76 9.4208-125.19 22.946..."
                    style={{ fill: "inherit" }}
                ></path>
            </g>
        </svg>
    );
}

// PropTypes for type checking the component props
// fill: expects a string for the flower color
// className: expects a string for additional CSS classes
Flower.propTypes = {
    fill: PropTypes.string,
    className: PropTypes.string,
};

export default Flower;
