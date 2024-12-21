import * as React from "react";

const content = [
  ["This is a react tutorials"],
  ["I am leaning react with tyescript"],
];

const App = () => {
  const [activeContentIndex, setActiveContentIndex] = React.useState(0);
  return (
    <div>
      <header>
        <div>
          <h1>React.js</h1>
        </div>
      </header>

      <div>
        <menu>
          <button
            onClick={() => setActiveContentIndex(0)}
          >
            What?
          </button>
          <button
            onClick={() => setActiveContentIndex(1)}
          >
            Who?
          </button>
        </menu>
        <div>
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
