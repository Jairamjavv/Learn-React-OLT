# Creating a react project

## Steps to run react project without CRA or vite

1. `mkdir my-react-app`
2. `cd my-react-app`
3. `npm init -y`
4. `npm install react react-dom`
5. `npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev`
6. Create `index.html`

   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    </head>
    <body>
    <div id="root"></div>
    <script src="bundle.js" defer></script>
    </body>
    </html>
   ```

7. Create `App.js`

   ```javascript
   import React from "react";
    const App = () => {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    };

    export { App };
   ```

8. Create `index.js`

    ```javascript
        import React from "react";
        import { createRoot } from "react-dom/client";
        import { App } from "./App";

        const root = createRoot(document.getElementById("root"));
        root.render(<App />);
    ```

9. Create `webpack.config.js`

    ```javascript
    const path = require("path");

    module.exports = {
        entry: "./index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        mode: "development",
    };
    ```

10. Create a `.babelrc` file

    ```json
        {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
    ```

11. `npx webpack` - to build the project every time we make a change
12. Create a copy of `index.html` and place it in the `dist` folder
13. `npx serve dist`

## Steps to create a react project with vite

1. `mkdir vite-react-app`
2. `cd vite-react-app`
   1. `npm install vite@latest . -- --template react` <!-- To create in currenct directory -->
   2. `npm install vite@latest vite-react-app -- --template react` <!-- To create in a specific directory -->
3. `npm i`
4. `npm run dev`

### Other Templates

> vanilla, vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts, solid, solid-ts, qwik, qwik-ts.
