// Create a root
// Render some markup in the root

import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"));
const root = createRoot(document.querySelector("#root"));
root.render(
    <div>
        <h1>Stationary Items</h1>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
    </div>
);

