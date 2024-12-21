# Learning React

## Source

- <https://www.youtube.com/watch?v=Uv7cKlZFXU8&t=1223s>

## Started

- September 21, 2024

## Requirements

- Node.js - npm(node package manager) is used to intall packages
- Editor - VSCode
- React Development Tools
- Plugins - es7 react redux react native snippets

## Installation

- `node -v` : v20.14.0 (22/09/2024)
- `npx create-react-app first_app` - Method 1 using CRA (deprecated)
- `npm create vite@latest first_app_vite` - Method 2 using vite (most used)
- `npm start` - deploying the react in localhost

## Concepts

- "react" and "react-dom" are the packages that are installed by default when we create a react app.
- Best practice is to create a separate file for each of the components.
- ReactDOM creates a virtual DOM.
- Components are created using function.
- Boolean logic are not allowed in JSX.
- Also objects cannot be used as childs of JSX.
- Comments in JSX are written like this `{/* here goes the comment */}`.

1. React Click Events
   - Best practice is to name an event starting with `handle`.
   - Example for a simple click event: `<button onClick={handleClick}>Add</button>`
   - Bad practice to pass a param like this `<button onClick={handleClickWithParam("Jairam")}>Add</button>`.
     - Reason is that this function will be executed when the component is rendered before even clicking the button.
     - Solution is to pass the function inside an anonymous function like below,
     - `<button onClick={() => handleClickWithParam("Jairam")}>Add</button>`
   - Events can be passed in a click event like this:
     - `<button onClick={(event) => handleClickWithEvent(event)}>See me again</button>`
     - Event object contains a lot of information about the event like `event.target.value` or `event.target.innerText`. check `console.log(event)` to see what all is available.
     - For example: `SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}`

2. React HOOKs
   - Hooks are functions that let us "hook" into React features from function components.
   - These are pre defined functions that are available in the react library.
   - Hooks can not be used inside loops, conditions or nested functions or classes.
   - Order of Hooks is important.
   - `useState`
     - `useState()` is a hook that lets us add state to function components.
     - `useState()` is a function that takes an initial state value as an argument and returns an array with two values: the current state value and a function to update the state value.
     - In `useState()`, the function which updates the state value is called a "setter function".
     - This setter function will only update the state value when the component is rendered.
     - Example: `const [count, setCount] = useState(() => {return 100-99});` // pure functions can be used inside the `useState()` hook.

### Difference between JSX and HTML

- JSX is a syntax extension to JavaScript.
- JSX uses `className` instead of `class` to set the class name.
- To use the pure JS functionalities inside the JSX, we need to use it inside `{}`.
  - For example, `{1+1}` will return 2 or `{name}` will search for `name` defined before `return()`.  
- Arrays are iterated using `map()` function. `map()` function is a Higher Order Function.
  - In arrays, keys are used to identify each element in the array. They are used as a unique identifier for each element in the array.

### React Icon

- `npm install react-icons`
- Reference: `https://react-icons.github.io/react-icons/`

### CSS Helper

- Reference: `https://github.com/gitdagray/react_styling_components/blob/main/src/index.css`
